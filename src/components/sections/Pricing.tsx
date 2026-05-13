export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 border-b hairline bg-[color:var(--paper-deep)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label">&sect; 06 / Pricing</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[8vw] md:text-[5vw] lg:text-[68px] font-medium max-w-[20ch]">
              Clear pricing,<br />
              <span className="display-italic">stated up front.</span>
            </h3>
            <p className="mt-6 max-w-[60ch] text-lg leading-snug opacity-80">
              We don&rsquo;t do &ldquo;contact us for pricing.&rdquo; You&rsquo;re running a city. You don&rsquo;t have time
              for a five-week sales cycle to find out if we&rsquo;re in your budget. We have a lot of flexible options
              depending on what you need — here&rsquo;s the structure:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-14 lg:mt-20">
          <div className="col-span-12 lg:col-span-2"></div>

          {/* Step 1 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-[color:var(--paper)] border hairline p-8 lg:p-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="label opacity-60">Step 1 &middot; one-time</div>
                <div className="mono text-xs opacity-50">Required</div>
              </div>
              <h4 className="display text-3xl lg:text-4xl font-medium mb-2 leading-tight">Implementation</h4>
              <p className="text-[15px] opacity-80 mb-6 leading-snug">
                We tailor the agent to your jurisdiction. Your code, your forms, your prior decisions, your reviewers&rsquo; voice.
                Data integrations included.
              </p>
              <div className="mb-6">
                <div className="display text-5xl lg:text-6xl font-medium num">$5K–$500K</div>
                <div className="mono text-xs opacity-60 mt-2">Range depends on scope — a single-department pilot looks very different from a city-wide rollout. Quoted in writing after a 30-min scoping call.</div>
              </div>
              <ul className="space-y-2.5 text-sm leading-snug border-t hairline pt-5 mt-auto">
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Agent configured against your municipal code in force</span>
                </li>
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Integrations with your existing systems (permitting, GIS, CRM, ERP)</span>
                </li>
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Voice &amp; format calibrated against your prior reviewer letters</span>
                </li>
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Eval suite built on your real submittal history</span>
                </li>
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Staff training and rollout support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-[color:var(--paper)] border hairline p-8 lg:p-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="label opacity-60">Step 2 &middot; ongoing</div>
                <div className="mono text-xs opacity-50">Your choice</div>
              </div>
              <h4 className="display text-3xl lg:text-4xl font-medium mb-2 leading-tight">Hosting</h4>
              <p className="text-[15px] opacity-80 mb-6 leading-snug">
                Once it&rsquo;s built, the agent is yours. Run it on your own infrastructure, or let us run it for you.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="border hairline p-4">
                  <div className="label opacity-60 mb-1">Self-hosted</div>
                  <div className="display text-3xl font-medium num">$0</div>
                  <div className="mono text-[11px] opacity-60 mt-2">per year, ongoing</div>
                  <div className="text-xs opacity-70 mt-3 leading-snug">You take the code and the model config. Run it where you want.</div>
                </div>
                <div className="border-2 border-[color:var(--ink)] p-4 bg-[color:var(--paper-deep)]">
                  <div className="label mb-1" style={{ color: 'var(--accent)' }}>We host</div>
                  <div className="display text-3xl font-medium num">$5K&ndash;15K</div>
                  <div className="mono text-[11px] opacity-60 mt-2">per year, all-in</div>
                  <div className="text-xs opacity-70 mt-3 leading-snug">Range depends on agent complexity, data volume, and uptime needs.</div>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm leading-snug border-t hairline pt-5 mt-auto">
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Hosted plan includes infrastructure, model costs, monitoring, and updates</span>
                </li>
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Continuous evals against your data. We see model drift before you do.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>SLA, support, and a real human to call</span>
                </li>
                <li className="flex gap-2">
                  <span className="mono text-[color:var(--accent)] mt-0.5">&rarr;</span>
                  <span>Switch to self-hosted any time. The code is yours either way.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROI note */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-12">
          <div className="col-span-12 lg:col-span-2"></div>
          <div className="col-span-12 lg:col-span-10">
            <div className="border-l-2 border-[color:var(--accent)] pl-5 max-w-[68ch]">
              <div className="label mb-2" style={{ color: 'var(--accent)' }}>Do the math</div>
              <p className="text-lg leading-snug">
                One reviewer&rsquo;s hour per week, at fully-loaded cost, pays for the hosted plan.
                The cities we work with typically get back five to fifteen.
                We&rsquo;re happy to walk through your specific numbers on a call.
              </p>
            </div>
          </div>
        </div>

        {/* House rules */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-16 pt-12 border-t hairline">
          <div className="col-span-12 lg:col-span-2">
            <div className="label opacity-60">House rules</div>
          </div>
          <div className="col-span-12 lg:col-span-10 grid sm:grid-cols-3 gap-8">
            <div>
              <div className="display text-xl font-medium mb-1.5">No per-seat fees.</div>
              <div className="text-sm opacity-75 leading-snug">Add every employee in your city. We won&rsquo;t charge more.</div>
            </div>
            <div>
              <div className="display text-xl font-medium mb-1.5">No per-token fees.</div>
              <div className="text-sm opacity-75 leading-snug">Use it as much as you want. Model costs are our problem on the hosted plan.</div>
            </div>
            <div>
              <div className="display text-xl font-medium mb-1.5">No surprise increases.</div>
              <div className="text-sm opacity-75 leading-snug">Multi-year pricing locked at signing. We renegotiate openly or not at all.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
