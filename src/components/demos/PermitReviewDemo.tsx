'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { SCENARIOS, ScenarioKey, Issue, ChatMessage } from '@/lib/permit-scenarios';
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

// ─── App window chrome ────────────────────────────────────────────────────────

function AppWindow({
  permitId,
  phase,
  onReset,
  children,
}: {
  permitId: string | null;
  phase: Phase;
  onReset: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden border hairline"
      style={{ boxShadow: '0 24px 64px rgba(21,19,15,0.18), 0 2px 8px rgba(21,19,15,0.08)' }}
    >
      {/* Title bar */}
      <div
        className="flex items-center px-4 py-2.5 border-b hairline select-none"
        style={{ background: 'var(--paper-deeper)' }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
        </div>
        {/* Title */}
        <div className="flex-1 text-center">
          <span className="text-[12px] font-medium opacity-50">
            Untrench &middot; Permit Review
            {permitId && (
              <span className="opacity-70"> &mdash; {permitId}</span>
            )}
          </span>
        </div>
        {/* Status / action */}
        <div className="flex-shrink-0 flex items-center gap-3">
          {phase === 'running' && (
            <span className="status-pill" style={{ fontSize: '9px' }}>
              <span className="live-dot" /> Working
            </span>
          )}
          {phase === 'complete' && (
            <span className="status-pill" style={{ fontSize: '9px', borderColor: 'var(--green)', color: 'var(--green)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
              Complete
            </span>
          )}
        </div>
      </div>

      {/* Toolbar / breadcrumb */}
      <div
        className="flex items-center gap-2 px-4 py-1.5 border-b hairline text-[11px]"
        style={{ background: 'var(--paper-deep)' }}
      >
        <span className="opacity-40 cursor-default">Review Queue</span>
        {permitId && (
          <>
            <span className="opacity-25">›</span>
            <span className="mono opacity-60 text-[10px]">{permitId}</span>
          </>
        )}
        {phase !== 'picking' && (
          <button
            onClick={onReset}
            className="opacity-40 hover:opacity-80 transition-opacity text-[10px] mono"
          >
            ← change
          </button>
        )}
        <div className="ml-auto mono text-[10px] opacity-30">
          {phase === 'picking' ? 'Select a submittal to begin' : ''}
        </div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

// ─── Confetti ─────────────────────────────────────────────────────────────────

function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 1.4,
      duration: 2.2 + Math.random() * 2,
      color: ['#b8351a', '#febc2e', '#28c840', '#1e3a6e', '#c98a1a', '#f4d4be', '#15130f'][Math.floor(Math.random() * 7)],
      size: 5 + Math.random() * 9,
      rotation: Math.random() * 360,
      circle: Math.random() > 0.55,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 9999 }}>
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: -16,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.circle ? '50%' : 2,
            animation: `confettiFall ${p.duration}s ${p.delay}s ease-in forwards`,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Issue card ───────────────────────────────────────────────────────────────

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

// ─── Main component ───────────────────────────────────────────────────────────

export default function PermitReviewDemo() {
  const [selectedKey, setSelectedKey] = useState<ScenarioKey | null>(null);
  const [phase, setPhase] = useState<Phase>('picking');
  const [steps, setSteps] = useState<StepState[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [chatMsgs, setChatMsgs] = useState<{ text: string }[]>([]);
  const [letterVisible, setLetterVisible] = useState(false);
  const [readPct, setReadPct] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const startTimeRef = useRef<number>(0);
  const reasoningRef = useRef<HTMLDivElement>(null);

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

  // Letter appears naturally as page grows — no forced scroll

  function runScenario(key: ScenarioKey) {
    const scenario = SCENARIOS[key];
    clearTimers();
    setSteps([]);
    setIssues([]);
    setChatMsgs([]);
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

    scenario.chatMessages.forEach((msg: ChatMessage) => {
      const t = setTimeout(() => setChatMsgs(prev => [...prev, { text: msg.text }]), msg.ms);
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
    setChatMsgs([]);
    setLetterVisible(false);
    setReadPct(0);
    setEmailSent(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const scenario = selectedKey ? SCENARIOS[selectedKey] : null;
  const isWorking = phase === 'running';
  const isActive = phase === 'running' || phase === 'complete';

  // Extract permit ID from docTitle for the window title bar
  const permitId = scenario ? scenario.docTitle.split(' ')[0].replace('&middot;', '').trim() : null;

  return (
    <main className="relative z-10 px-4 lg:px-6 py-6 lg:py-8">
      <AppWindow permitId={permitId} phase={phase} onReset={handleReset}>

        {/* ── Picker ── */}
        {phase === 'picking' && (
          <div className="p-6 lg:p-8">
            <div className="mb-8">
              <div className="label mb-3 opacity-70">Step 1 of 2</div>
              <h1 className="display text-4xl lg:text-5xl font-medium leading-[0.95] mb-4 max-w-[22ch]">
                Pick a permit submittal.<br />
                <span className="display-italic">Watch us review it.</span>
              </h1>
              <p className="text-base leading-snug opacity-80 max-w-[60ch]">
                Each scenario is real building-code review work, sized to a small or mid-size jurisdiction.
                The agent reads the submittal, cross-references the code in force, and produces a
                reviewer&rsquo;s letter with citations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
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
                      {key === 'adu' && '720 sq ft detached ADU on a single-family lot. Submitted by a local design-build firm.'}
                      {key === 'cafe' && 'Conversion of vacant retail bay into a 38-seat cafe. Existing 1986 strip mall, use change M to A-2.'}
                      {key === 'solar' && '8.4 kW residential rooftop PV array, 22 modules on a 1990s composition-shingle roof.'}
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

            <div className="mt-6 flex items-center gap-3">
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
          </div>
        )}

        {/* ── Workspace ── */}
        {isActive && scenario && (
          <div
            className="grid"
            style={{ gridTemplateColumns: '280px 1fr 300px' }}
          >
            {/* Left: Submittal form — grows with content, page scrolls */}
            <aside
              className="border-r hairline"
              style={{ background: 'var(--paper)' }}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="label opacity-60" style={{ fontSize: '10px' }}>Submittal</div>
                  <span className="mono text-[9px] opacity-50">
                    Sheet 1/{scenario.pages} &middot; <span className="num">{readPct}</span>% read
                  </span>
                </div>
                <div
                  className="doc-preview p-4 text-[12px]"
                  dangerouslySetInnerHTML={{ __html: scenario.docContent }}
                />
              </div>
            </aside>

            {/* Center: Findings + letter — grows with content, page scrolls */}
            <div
              className="border-r hairline"
              style={{ background: 'var(--paper)' }}
            >
              <div className="p-5">
                {/* Findings header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="label opacity-60">Findings</div>
                  <div className="flex items-center gap-3 mono text-[11px] opacity-70">
                    <span><span className="num">{issues.length}</span> issue(s)</span>
                    <span className="opacity-40">&bull;</span>
                    <span><span className="num">{issues.length}</span> citation(s)</span>
                  </div>
                </div>

                <div className="space-y-3 min-h-[200px]">
                  {issues.length === 0 && (
                    <div className="text-sm opacity-40 italic py-12 text-center">
                      Findings will appear here as the agent works.
                    </div>
                  )}
                  {issues.map((issue, i) => (
                    <IssueCard key={i} issue={issue} />
                  ))}
                </div>

                {/* Reviewer letter */}
                {letterVisible && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="label opacity-60">Draft &middot; reviewer&rsquo;s letter</div>
                      <span className="status-pill" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
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
                    {emailSent ? (
                      <>
                        <Confetti />
                        <div className="mt-6 p-8 border hairline text-center" style={{ background: 'var(--paper-deep)' }}>
                          <div className="display text-5xl font-medium mb-3 leading-tight">
                            That was<br /><span className="display-italic">easy.</span>
                          </div>
                          <p className="text-sm opacity-60 mb-7 max-w-[36ch] mx-auto leading-relaxed">
                            Email queued for the applicant. {scenario.reviewer.split(' (')[0]} has been notified.
                          </p>
                          <div className="flex items-center justify-center gap-3 flex-wrap">
                            <button onClick={handleReset} className="btn-primary px-6 py-3 text-sm">
                              Try another scenario <span className="caret">&rarr;</span>
                            </button>
                            <Link href="/#contact" className="btn-ghost px-6 py-3 text-sm">
                              Talk to us <span className="caret">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="mt-4 flex items-center gap-3 flex-wrap">
                        <button
                          className="btn-primary px-4 py-2 text-xs"
                          onClick={() => setEmailSent(true)}
                        >
                          Send as an email to applicant <span className="caret">&rarr;</span>
                        </button>
                        <button onClick={handleReset} className="btn-ghost px-4 py-2 text-xs">
                          Try another scenario
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Chat + Reasoning — natural flow, each panel has its own bounded scroll */}
            <aside style={{ background: 'var(--paper-deep)' }}>
              {/* Chat panel */}
              <div className="p-4 border-b hairline">
                <div className="flex items-center justify-between mb-2">
                  <div className="label opacity-60" style={{ fontSize: '10px' }}>Agent</div>
                  <span className="mono text-[9px] opacity-40">{scenario.reviewer.split(' (')[0]}</span>
                </div>
                <div className="max-h-72 overflow-y-auto scroll-area space-y-2 pr-0.5">
                  {chatMsgs.length === 0 ? (
                    <div className="text-[11px] opacity-30 italic py-8 text-center leading-relaxed">
                      Agent will narrate<br />findings as it works.
                    </div>
                  ) : (
                    chatMsgs.map((msg, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <div
                          className="flex-shrink-0 w-[18px] h-[18px] rounded flex items-center justify-center text-[7px] font-bold mt-0.5 leading-none"
                          style={{ background: 'var(--accent)', color: 'var(--paper)', letterSpacing: '0.04em' }}
                        >
                          AI
                        </div>
                        <div
                          className="text-[11.5px] leading-snug rounded px-2 py-1.5 flex-1"
                          style={{ background: 'var(--paper)', border: '1px solid var(--rule)' }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))
                  )}
                  {isWorking && (
                    <div className="flex gap-2 items-start">
                      <div
                        className="flex-shrink-0 w-[18px] h-[18px] rounded flex items-center justify-center text-[7px] font-bold"
                        style={{ background: 'var(--accent)', color: 'var(--paper)' }}
                      >
                        AI
                      </div>
                      <div
                        className="text-[13px] rounded px-2.5 py-1"
                        style={{ background: 'var(--paper)', border: '1px solid var(--rule)', letterSpacing: '0.1em' }}
                      >
                        <span className="opacity-30 animate-pulse">· · ·</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* Disabled input */}
                <div className="mt-2 pt-2 border-t hairline flex gap-1.5 items-center">
                  <input
                    type="text"
                    disabled
                    placeholder={isWorking ? 'Review in progress…' : 'Demo mode — input disabled'}
                    className="flex-1 text-[10.5px] px-2 py-1 border hairline rounded opacity-30 cursor-not-allowed bg-transparent"
                  />
                  <button disabled className="text-[10.5px] px-2 py-1 border hairline rounded opacity-20 cursor-not-allowed whitespace-nowrap">
                    Send
                  </button>
                </div>
              </div>

              {/* Reasoning trail */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="label opacity-40" style={{ fontSize: '9px' }}>Internal reasoning</div>
                  {phase === 'complete' ? (
                    <span className="mono text-[9px]" style={{ color: 'var(--green)' }}>done</span>
                  ) : (
                    <span className="mono text-[9px] opacity-40">live</span>
                  )}
                </div>
                <div ref={reasoningRef} className="max-h-56 overflow-y-auto scroll-area space-y-2">
                  {steps.length === 0 && (
                    <div className="text-[10px] opacity-25 italic py-4 text-center">
                      Steps will appear here.
                    </div>
                  )}
                  {steps.map((step, i) => (
                    <div key={i} className="step flex gap-2 text-[11px] leading-snug">
                      <div className={`step-icon ${step.status}`} style={{ width: 14, height: 14, marginTop: 2 }} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-[10.5px]" dangerouslySetInnerHTML={{ __html: step.text }} />
                        <div className="opacity-50 text-[9.5px] mt-0.5 leading-snug mono" dangerouslySetInnerHTML={{ __html: step.detail }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        )}

      </AppWindow>
    </main>
  );
}
