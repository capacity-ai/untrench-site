'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { SCENARIOS, ScenarioKey, Issue } from '@/lib/permit-scenarios';
import { captureDemoStarted, captureDemoCompleted } from '@/lib/posthog';

interface StepState {
  text: string;
  detail: string;
  status: 'active' | 'done';
}

type Phase = 'picking' | 'running' | 'complete';

const SCENARIO_LABELS: Record<ScenarioKey, { label: string; letter: string; time: string }> = {
  adu: { label: 'Residential ADU', letter: 'A', time: '~45 sec' },
  cafe: { label: 'Tenant improvement, cafe', letter: 'B', time: '~60 sec' },
  solar: { label: 'Rooftop solar, SFR', letter: 'C', time: '~30 sec' },
};

export default function PermitReviewDemo() {
  const [selectedKey, setSelectedKey] = useState<ScenarioKey | null>(null);
  const [phase, setPhase] = useState<Phase>('picking');
  const [steps, setSteps] = useState<StepState[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [letterVisible, setLetterVisible] = useState(false);
  const [readPct, setReadPct] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const startTimeRef = useRef<number>(0);
  const reasoningRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  useEffect(() => {
    if (reasoningRef.current) {
      reasoningRef.current.scrollTop = reasoningRef.current.scrollHeight;
    }
  }, [steps]);

  useEffect(() => {
    if (letterVisible && letterRef.current) {
      setTimeout(() => letterRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
    }
  }, [letterVisible]);

  function runScenario(key: ScenarioKey) {
    const scenario = SCENARIOS[key];
    clearTimers();
    setSteps([]);
    setIssues([]);
    setLetterVisible(false);
    setReadPct(0);
    setPhase('running');
    startTimeRef.current = Date.now();
    captureDemoStarted(key);

    const newTimers: ReturnType<typeof setTimeout>[] = [];
    const total = scenario.steps.length;

    scenario.steps.forEach((step, i) => {
      const t = setTimeout(() => {
        setSteps(prev => {
          const updated = prev.map(s => s.status === 'active' ? { ...s, status: 'done' as const } : s);
          return [...updated, { text: step.text, detail: step.detail, status: 'active' }];
        });
        setReadPct(Math.round(((i + 1) / total) * 100));

        if (i === total - 1) {
          const finalT = setTimeout(() => {
            setSteps(prev => prev.map(s => s.status === 'active' ? { ...s, status: 'done' as const } : s));
            setPhase('complete');
            setLetterVisible(true);
            captureDemoCompleted(key, Date.now() - startTimeRef.current);
          }, 600);
          newTimers.push(finalT);
        }
      }, step.ms);
      newTimers.push(t);
    });

    scenario.issues.forEach(issue => {
      const t = setTimeout(() => setIssues(prev => [...prev, issue]), issue.ms);
      newTimers.push(t);
    });

    timersRef.current = newTimers;
  }

  function handleReset() {
    clearTimers();
    setSelectedKey(null);
    setPhase('picking');
    setSteps([]);
    setIssues([]);
    setLetterVisible(false);
    setReadPct(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scenario = selectedKey ? SCENARIOS[selectedKey] : null;
  const isWorking = phase === 'running' || phase === 'complete';

  return (
    <>
      {/* Doc context subheader */}
      {isWorking && scenario && (
        <div className="relative z-10 border-b hairline bg-[color:var(--paper-deep)]">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-3 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <div className="label opacity-60">Reviewing</div>
                <div
                  className="text-sm font-medium"
                  dangerouslySetInnerHTML={{ __html: scenario.docTitle }}
                />
              </div>
              <div>
                <div className="label opacity-60">Jurisdiction</div>
                <div className="text-sm font-medium">{scenario.juris}</div>
              </div>
              <div>
                <div className="label opacity-60">Code in force</div>
                <div className="text-sm mono">{scenario.code}</div>
              </div>
              <div>
                <div className="label opacity-60">Reviewer</div>
                <div className="text-sm">{scenario.reviewer}</div>
              </div>
            </div>
            <button onClick={handleReset} className="btn-ghost text-xs px-3 py-1.5">
              &larr; Pick a different scenario
            </button>
          </div>
        </div>
      )}

      {/* Main */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 py-8 lg:py-10">

        {/* Picker */}
        {phase === 'picking' && (
          <section>
            <div className="mb-8">
              <div className="label mb-3 opacity-70">Step 1 of 2</div>
              <h1 className="display text-4xl lg:text-6xl font-medium leading-[0.95] mb-4 max-w-[20ch]">
                Pick a permit submittal.{/* br-ok */}<br />
                <span className="display-italic">Watch us review it.</span>
              </h1>
              <p className="text-lg leading-snug opacity-80 max-w-[60ch]">
                Each scenario is real building-code review work, sized to a small or mid-size jurisdiction.
                The agent reads the submittal, cross-references the actual code in force, and produces a reviewer&rsquo;s letter
                with citations. Pick one to start.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {(Object.entries(SCENARIOS) as [ScenarioKey, (typeof SCENARIOS)[ScenarioKey]][]).map(([key, s]) => {
                const meta = SCENARIO_LABELS[key];
                return (
                  <div
                    key={key}
                    className={`scenario p-6 ${selectedKey === key ? 'selected' : ''}`}
                    onClick={() => setSelectedKey(key)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="label opacity-60">Scenario {meta.letter}</span>
                      <span className="mono text-[10px] opacity-50">{meta.time}</span>
                    </div>
                    <div className="display text-2xl font-medium mb-2 leading-tight">{meta.label}</div>
                    <div className="text-sm opacity-80 mb-4 leading-snug">
                      {key === 'adu' && '720 sq ft detached accessory dwelling unit on a single-family lot. Submitted by a local design-build firm.'}
                      {key === 'cafe' && 'Conversion of vacant retail bay into a 38-seat cafe with limited prep kitchen. Existing 1986 strip mall.'}
                      {key === 'solar' && '8.4 kW residential rooftop PV array, 22 modules on a 1990s composition-shingle roof. Standard installer package.'}
                    </div>
                    <div className="space-y-1.5 text-xs opacity-70">
                      <div className="flex justify-between"><span>Jurisdiction</span><span className="mono">{s.juris.split(' (')[0]}</span></div>
                      <div className="flex justify-between"><span>Code basis</span><span className="mono">{s.code}</span></div>
                      <div className="flex justify-between"><span>Sheets</span><span className="mono num">{s.pages}</span></div>
                      <div className="flex justify-between">
                        <span>Likely issues</span>
                        <span className="mono num">
                          {key === 'adu' ? '3–5' : key === 'cafe' ? '5–7' : '2–3'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                className="btn-primary px-6 py-3 text-sm"
                disabled={!selectedKey}
                onClick={() => selectedKey && runScenario(selectedKey)}
              >
                Start review <span className="caret">&rarr;</span>
              </button>
              <span className="mono text-xs opacity-60">
                {selectedKey ? `Selected: ${SCENARIO_LABELS[selectedKey].label}` : 'Pick a scenario above.'}
              </span>
            </div>
          </section>
        )}

        {/* Workspace */}
        {isWorking && scenario && (
          <section>
            <div className="grid grid-cols-12 gap-6">

              {/* Left: document preview */}
              <aside className="col-span-12 lg:col-span-3">
                <div className="label mb-3 opacity-60">Submittal</div>
                <div
                  className="doc-preview p-5 text-[13px] leading-[24px]"
                  dangerouslySetInnerHTML={{ __html: scenario.docContent }}
                />
                <div className="mt-3 mono text-[11px] opacity-60 flex items-center justify-between">
                  <span>Sheet 1 of <span className="num">{scenario.pages}</span></span>
                  <span>Read by agent &middot; <span className="num">{readPct}</span>%</span>
                </div>
              </aside>

              {/* Center: findings */}
              <div className="col-span-12 lg:col-span-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="label opacity-60">Findings</div>
                  <div className="flex items-center gap-3 mono text-[11px] opacity-70">
                    <span><span className="num">{issues.length}</span> issue(s)</span>
                    <span className="opacity-50">&bull;</span>
                    <span><span className="num">{issues.length}</span> citation(s)</span>
                  </div>
                </div>

                <div className="space-y-3 min-h-[300px]">
                  {issues.length === 0 && (
                    <div className="text-sm opacity-50 italic py-12 text-center">
                      Findings will appear here as the agent works.
                    </div>
                  )}
                  {issues.map((issue, i) => (
                    <IssueCard key={i} issue={issue} />
                  ))}
                </div>

                {/* Letter */}
                {letterVisible && (
                  <div ref={letterRef} className="mt-8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="label opacity-60">Draft &middot; reviewer&rsquo;s letter</div>
                      <span className="status-pill" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}></span>
                        Ready for human review
                      </span>
                    </div>
                    <div className="letter p-6 text-[15px]">
                      <div className="mb-4 pb-3 border-b hairline">
                        <div className="label opacity-60 mb-1">Subject</div>
                        <div
                          className="font-medium"
                          dangerouslySetInnerHTML={{ __html: scenario.letter.subject }}
                        />
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: scenario.letter.body }} />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="btn-ghost px-4 py-2 text-xs">Open in editor</button>
                      <button className="btn-ghost px-4 py-2 text-xs">Send to applicant queue</button>
                      <button className="btn-ghost px-4 py-2 text-xs">Export PDF</button>
                      <button onClick={handleReset} className="btn-primary px-4 py-2 text-xs ml-auto">
                        Try another scenario <span className="caret">&rarr;</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: reasoning trail */}
              <aside className="col-span-12 lg:col-span-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="label opacity-60">Agent reasoning</div>
                  {phase === 'complete' ? (
                    <span className="status-pill" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}></span>
                      Complete
                    </span>
                  ) : (
                    <span className="status-pill">
                      <span className="live-dot"></span> Working
                    </span>
                  )}
                </div>
                <div ref={reasoningRef} className="scroll-area space-y-3 max-h-[600px] overflow-y-auto pr-2">
                  {steps.map((step, i) => (
                    <div key={i} className="step flex gap-3 text-[12.5px] leading-snug">
                      <div className={`step-icon ${step.status}`}></div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-medium"
                          dangerouslySetInnerHTML={{ __html: step.text }}
                        />
                        <div
                          className="opacity-60 text-[11px] mt-0.5 leading-snug mono"
                          dangerouslySetInnerHTML={{ __html: step.detail }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 border hairline text-xs opacity-70 leading-relaxed">
                  <div className="mono text-[10px] uppercase tracking-wider opacity-60 mb-1">What you&rsquo;re seeing</div>
                  In production, this stream is real model reasoning, not a script. Every step is logged and
                  attributable. Reviewers can drill into any citation to see the source paragraph.
                </div>
              </aside>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

function IssueCard({ issue }: { issue: Issue }) {
  const sevLabel = {
    high: <span className="mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--accent)' }}>High &middot; correction required</span>,
    medium: <span className="mono text-[10px] uppercase tracking-wider" style={{ color: '#c98a1a' }}>Medium &middot; clarification needed</span>,
    info: <span className="mono text-[10px] uppercase tracking-wider opacity-60">Info &middot; no action</span>,
  }[issue.severity];

  return (
    <div className={`issue-card severity-${issue.severity} p-4`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="label opacity-60 mb-1">{issue.category}</div>
          <div className="font-medium text-[15px]">{issue.title}</div>
        </div>
        {sevLabel}
      </div>
      <div
        className="text-sm leading-relaxed mb-2"
        dangerouslySetInnerHTML={{ __html: issue.body }}
      />
      <div className="text-xs flex items-center gap-2 opacity-70">
        <span className="chip">{issue.cite}</span>
      </div>
      {issue.suggested && (
        <div className="mt-3 pt-3 border-t hairline text-sm leading-relaxed">
          <span className="label opacity-60">Suggested resolution &middot;</span> {issue.suggested}
        </div>
      )}
    </div>
  );
}
