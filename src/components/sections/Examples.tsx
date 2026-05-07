import TrackableLink from '@/components/TrackableLink';

export default function Examples() {
  return (
    <section id="examples" className="relative z-10 border-b hairline bg-[color:var(--paper-deep)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label">&sect; 03 / Examples</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[8vw] md:text-[5vw] lg:text-[68px] font-medium max-w-[20ch]">
              Five things we&rsquo;ve built{/* br-ok */}<br />
              <span className="display-italic">for cities like yours.</span>
            </h3>
            <p className="mt-6 max-w-[62ch] text-lg leading-snug opacity-80">
              Each one is a real working agent in a real local-government workflow.
              They aren&rsquo;t videos and they aren&rsquo;t mockups. You&rsquo;ll be poking at the actual system,
              with the actual reasoning, on real example data. Permit review is live now. The rest are in active builds.
            </p>
          </div>
        </div>

        {/* Demo grid */}
        <div className="mt-16 lg:mt-20 border-t border-[color:var(--ink)]">

          {/* Row 1 — Live */}
          <TrackableLink
            href="/demos/permit-review"
            location="examples"
            label="Try permit review demo"
            className="demo-card grid grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-[color:var(--ink)] cursor-pointer no-underline text-inherit"
          >
            <div className="col-span-12 lg:col-span-1">
              <div className="mono text-[color:var(--accent)] text-lg">01</div>
              <div className="mt-2 inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--accent)]">
                <span className="pulse-dot"></span> Live
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="label mb-3">Critique &middot; permitting</div>
              <h4 className="display text-4xl lg:text-5xl font-medium mb-3">Permit review</h4>
              <p className="text-[17px] leading-snug max-w-[42ch] opacity-80">
                Reads a permit submission against the actual code in force in your jurisdiction —
                not a generic building code, yours. Knows which sections govern the specific case.
                Flags conflicts with citations. Drafts the reviewer&rsquo;s letter in your office&rsquo;s voice.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                <span>Try the demo</span>
                <span className="arrow inline-block">&UpperRightArrow;</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="preview-frame p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="preview-dots">
                    <span className="preview-dot"></span>
                    <span className="preview-dot"></span>
                    <span className="preview-dot"></span>
                  </div>
                  <div className="mono text-[10px] opacity-60">PERMIT-2026-0114 &middot; ADU &middot; Berkeley, CA</div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-2 border-[color:var(--accent)] pl-3">
                    <div className="mono text-[10px] uppercase tracking-wider opacity-60">Issue &middot; setback</div>
                    <div className="text-sm">Rear setback shown at <span className="num">3&rsquo;-6&rdquo;</span>. <span className="opacity-60">BMC &sect;23.304.060.A requires <span className="num">4&rsquo;-0&rdquo;</span> minimum for ADUs over 800 sq ft.</span></div>
                  </div>
                  <div className="border-l-2 border-[color:var(--accent)] pl-3">
                    <div className="mono text-[10px] uppercase tracking-wider opacity-60">Issue &middot; egress</div>
                    <div className="text-sm">Bedroom 2 window sill at <span className="num">46&rdquo;</span>. <span className="opacity-60">CRC R310.2.2 requires &le;44&rdquo; from finished floor.</span></div>
                  </div>
                  <div className="border-l-2 border-[color:var(--ink)] opacity-50 pl-3">
                    <div className="mono text-[10px] uppercase tracking-wider">Note</div>
                    <div className="text-sm">Solar-ready provisions appear satisfied per CALGreen &sect;4.201.1.</div>
                  </div>
                </div>
                <div className="mt-4 stripe h-2 rounded-sm"></div>
              </div>
            </div>
          </TrackableLink>

          {/* Row 2 */}
          <article className="demo-card grid grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-[color:var(--ink)] cursor-default opacity-95">
            <div className="col-span-12 lg:col-span-1">
              <div className="mono text-[color:var(--accent)] text-lg">02</div>
              <div className="mt-2 inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.16em] opacity-60">In build</div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="label mb-3">Search + draft &middot; grants</div>
              <h4 className="display text-4xl lg:text-5xl font-medium mb-3">Grant finder &amp; writer</h4>
              <p className="text-[17px] leading-snug max-w-[42ch] opacity-80">
                Reads your capital plan and prior awards, then matches them against live federal, state, and foundation grant databases — including the eligibility rules most searches miss. Fit scores with reasoning. Drafts the narrative in your voice.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-70">
                <span>Coming soon</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="preview-frame p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="preview-dots">
                    <span className="preview-dot"></span><span className="preview-dot"></span><span className="preview-dot"></span>
                  </div>
                  <div className="mono text-[10px] opacity-60">CITY &middot; pop. 38,400 &middot; capital plan FY26</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm py-1.5 border-b hairline">
                    <span>USDOT Safe Streets &amp; Roads for All</span>
                    <span className="mono text-[color:var(--accent)]">fit &middot; 0.94</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-1.5 border-b hairline">
                    <span>EPA Community Change Grants</span>
                    <span className="mono text-[color:var(--accent)]">fit &middot; 0.88</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-1.5 border-b hairline">
                    <span>FEMA BRIC pre-disaster mitigation</span>
                    <span className="mono text-[color:var(--accent)]">fit &middot; 0.81</span>
                  </div>
                  <div className="flex items-center justify-between text-sm py-1.5 opacity-50">
                    <span>HUD CDBG rural set-aside</span>
                    <span className="mono">fit &middot; 0.42 (pop. cap)</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-[color:var(--paper)] border hairline">
                  <div className="mono text-[10px] uppercase tracking-wider opacity-60 mb-1">Draft &middot; project narrative &sect;2</div>
                  <div className="text-sm leading-snug italic">&ldquo;The Maple Street corridor, identified in our 2024 Local Road Safety Plan as the city&rsquo;s highest-injury arterial, aligns directly with USDOT&rsquo;s 2026 SS4A priority on systemic redesign in communities under 50,000&hellip;&rdquo;</div>
                </div>
              </div>
            </div>
          </article>

          {/* Row 3 */}
          <article className="demo-card grid grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-[color:var(--ink)] cursor-default opacity-95">
            <div className="col-span-12 lg:col-span-1">
              <div className="mono text-[color:var(--accent)] text-lg">03</div>
              <div className="mt-2 inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.16em] opacity-60">In build</div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="label mb-3">Read + draft &middot; procurement</div>
              <h4 className="display text-4xl lg:text-5xl font-medium mb-3">RFP response</h4>
              <p className="text-[17px] leading-snug max-w-[42ch] opacity-80">
                For when your city is the one <em>responding</em>, or evaluating.
                Reads the RFP, builds the compliance matrix, flags the requirements you don&rsquo;t meet,
                and drafts response sections weaving in your past wins.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-70">
                <span>Coming soon</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="preview-frame p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="preview-dots">
                    <span className="preview-dot"></span><span className="preview-dot"></span><span className="preview-dot"></span>
                  </div>
                  <div className="mono text-[10px] opacity-60">RFP-2026-DOT-441 &middot; compliance matrix</div>
                </div>
                <div className="space-y-0">
                  <div className="grid grid-cols-12 gap-2 py-2 border-b hairline text-sm">
                    <div className="col-span-2 mono text-xs opacity-60">L.4.2.1</div>
                    <div className="col-span-7">SOC 2 Type II (current)</div>
                    <div className="col-span-3 text-right mono text-[color:var(--accent)] text-xs">MET</div>
                  </div>
                  <div className="grid grid-cols-12 gap-2 py-2 border-b hairline text-sm">
                    <div className="col-span-2 mono text-xs opacity-60">L.4.2.2</div>
                    <div className="col-span-7">FedRAMP Moderate ATO</div>
                    <div className="col-span-3 text-right mono text-xs" style={{ color: 'var(--accent)' }}>GAP &mdash; 4mo</div>
                  </div>
                  <div className="grid grid-cols-12 gap-2 py-2 border-b hairline text-sm">
                    <div className="col-span-2 mono text-xs opacity-60">L.4.3.1</div>
                    <div className="col-span-7">Past performance, &gt;$2M, public sector</div>
                    <div className="col-span-3 text-right mono text-[color:var(--accent)] text-xs">MET &times;3</div>
                  </div>
                  <div className="grid grid-cols-12 gap-2 py-2 text-sm">
                    <div className="col-span-2 mono text-xs opacity-60">M.5.1</div>
                    <div className="col-span-7">Section 508 conformance report</div>
                    <div className="col-span-3 text-right mono text-[color:var(--accent)] text-xs">MET</div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Row 4 */}
          <article className="demo-card grid grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-[color:var(--ink)] cursor-default opacity-95">
            <div className="col-span-12 lg:col-span-1">
              <div className="mono text-[color:var(--accent)] text-lg">04</div>
              <div className="mt-2 inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.16em] opacity-60">In build</div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="label mb-3">Triage + respond &middot; constituent mail</div>
              <h4 className="display text-4xl lg:text-5xl font-medium mb-3">Constituent triage</h4>
              <p className="text-[17px] leading-snug max-w-[42ch] opacity-80">
                For council offices, mayors, and 311 lines that get more mail than they can answer.
                Classifies casework, policy comment, and FOIA. Routes correctly. Drafts replies in your office&rsquo;s voice.
                Every decision logged, every draft reviewable.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-70">
                <span>Coming soon</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="preview-frame p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="preview-dots">
                    <span className="preview-dot"></span><span className="preview-dot"></span><span className="preview-dot"></span>
                  </div>
                  <div className="mono text-[10px] opacity-60">INBOX &middot; district 7 &middot; today</div>
                </div>
                <div className="space-y-0">
                  <div className="flex items-center gap-3 py-2 border-b hairline">
                    <span className="mono text-[10px] px-1.5 py-0.5 bg-[color:var(--accent)] text-[color:var(--paper)] rounded-sm">CASEWORK</span>
                    <span className="text-sm flex-1 truncate">Resident &mdash; SNAP recertification not received</span>
                    <span className="mono text-[10px] opacity-60">&rarr; benefits team</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b hairline">
                    <span className="mono text-[10px] px-1.5 py-0.5 bg-[color:var(--ink)] text-[color:var(--paper)] rounded-sm">POLICY</span>
                    <span className="text-sm flex-1 truncate">Comment on draft zoning amendment</span>
                    <span className="mono text-[10px] opacity-60">&rarr; policy + log</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b hairline">
                    <span className="mono text-[10px] px-1.5 py-0.5 border hairline rounded-sm">FOIA</span>
                    <span className="text-sm flex-1 truncate">Records request &mdash; 2024 contracts &gt;$50k</span>
                    <span className="mono text-[10px] opacity-60">&rarr; counsel</span>
                  </div>
                  <div className="flex items-center gap-3 py-2">
                    <span className="mono text-[10px] px-1.5 py-0.5 border hairline rounded-sm">THANKS</span>
                    <span className="text-sm flex-1 truncate opacity-70">&ldquo;thank you for the town hall last week&hellip;&rdquo;</span>
                    <span className="mono text-[10px] opacity-60">&rarr; auto-reply</span>
                  </div>
                </div>
                <div className="mt-3 mono text-[11px] opacity-60">
                  <span className="num">847</span> processed &middot; <span className="num">23</span> escalated &middot; <span className="num">0</span> dropped
                </div>
              </div>
            </div>
          </article>

          {/* Row 5 */}
          <article className="demo-card grid grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 cursor-default opacity-95">
            <div className="col-span-12 lg:col-span-1">
              <div className="mono text-[color:var(--accent)] text-lg">05</div>
              <div className="mt-2 inline-flex items-center gap-1.5 mono text-[10px] uppercase tracking-[0.16em] opacity-60">In build</div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="label mb-3">Resolve &middot; municipal code</div>
              <h4 className="display text-4xl lg:text-5xl font-medium mb-3">Code conflict audit</h4>
              <p className="text-[17px] leading-snug max-w-[42ch] opacity-80">
                Reads your full municipal code and surfaces what contradicts what,
                what&rsquo;s redundant, and what just got quietly amended last Tuesday.
                Every flag has a citation chain to the source ordinance.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-70">
                <span>Coming soon</span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="preview-frame p-5 lg:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="preview-dots">
                    <span className="preview-dot"></span><span className="preview-dot"></span><span className="preview-dot"></span>
                  </div>
                  <div className="mono text-[10px] opacity-60">MUNI CODE &middot; audit &middot; 14,221 sections</div>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-wider opacity-60 mb-1">Direct contradiction &middot; 1</div>
                    <div className="leading-snug"><span className="mono text-xs">&sect;17.44.030</span> requires 1 parking space per ADU. <span className="mono text-xs">&sect;17.44.090</span> (added 2024) prohibits parking minimums in transit zones. Same parcel, two rules.</div>
                  </div>
                  <div className="border-t hairline pt-3">
                    <div className="mono text-[10px] uppercase tracking-wider opacity-60 mb-1">Redundant clauses &middot; 6</div>
                    <div className="opacity-80 leading-snug">Definition of &ldquo;habitable space&rdquo; is restated, with minor variation, across &sect;15, &sect;17, and &sect;22. Recommend consolidation.</div>
                  </div>
                  <div className="border-t hairline pt-3">
                    <div className="mono text-[10px] uppercase tracking-wider opacity-60 mb-1">Stale references &middot; 3</div>
                    <div className="opacity-80 leading-snug">&sect;19.12 cites <span className="mono text-xs">2018 IBC</span>; jurisdiction adopted <span className="mono text-xs">2022 IBC</span> in March.</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <p className="mono text-xs opacity-60 mt-8">
          Note &middot; Permit review is live now. The other four are in active builds. Static previews above are sized to real outputs.
        </p>
      </div>
    </section>
  );
}
