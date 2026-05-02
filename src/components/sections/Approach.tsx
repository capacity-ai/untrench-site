export default function Approach() {
  return (
    <section id="approach" className="relative z-10 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label">&sect; 01 / Approach</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[8vw] md:text-[5vw] lg:text-[68px] font-medium max-w-[18ch]">
              There are two kinds of AI work.<br />
              <span className="display-italic">We do one of them.</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-16 lg:mt-20">
          <div className="col-span-12 lg:col-span-2"></div>

          {/* Option A */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 compare-col">
            <div className="label mb-4 opacity-60">Option A &middot; free, fast, fine</div>
            <h4 className="text-3xl lg:text-4xl mb-6 font-medium">
              You paste it<br />into a chatbot.
            </h4>
            <ul className="space-y-4 text-[17px] leading-relaxed max-w-[40ch]">
              <li className="flex gap-3">
                <span className="mono text-[color:var(--accent)] mt-1">+</span>
                <span>Works most of the time. Free or close to it.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono text-[color:var(--accent)] mt-1">+</span>
                <span>Great for drafts, summaries, and low-stakes lookups.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono opacity-40 mt-1">&minus;</span>
                <span className="opacity-70">Hallucinates code citations under public records request.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono opacity-40 mt-1">&minus;</span>
                <span className="opacity-70">Doesn&rsquo;t know your municipal code, your funders, your forms, your council.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono opacity-40 mt-1">&minus;</span>
                <span className="opacity-70">No audit trail. No integrations. No one to call when it&rsquo;s wrong.</span>
              </li>
            </ul>
            <div className="mono text-sm mt-8 opacity-60">
              <span className="strike">Use this for the council packet.</span>
            </div>
          </div>

          {/* Option B */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 compare-col bg-[color:var(--paper-deep)] p-8 lg:p-10 -mx-2 lg:-mx-0">
            <div className="label mb-4 text-[color:var(--accent)]">Option B &middot; what we do</div>
            <h4 className="text-3xl lg:text-4xl mb-6 font-medium">
              You hire the team that already<br />knows local government.
            </h4>
            <ul className="space-y-4 text-[17px] leading-relaxed max-w-[40ch]">
              <li className="flex gap-3">
                <span className="mono text-[color:var(--accent)] mt-1">&rarr;</span>
                <span>Right answers, with citations to <em>your</em> code, <em>your</em> minutes, <em>your</em> ordinances.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono text-[color:var(--accent)] mt-1">&rarr;</span>
                <span>Tailored to your jurisdiction, your funders, your prior decisions, your voice.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono text-[color:var(--accent)] mt-1">&rarr;</span>
                <span>Real interfaces, not a chat box. Defensible records. Reviewable diffs.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono text-[color:var(--accent)] mt-1">&rarr;</span>
                <span>Evals, guardrails, and a human in the loop wherever the law requires one.</span>
              </li>
              <li className="flex gap-3">
                <span className="mono text-[color:var(--accent)] mt-1">&rarr;</span>
                <span>Built to be 99.5% right. And to tell you, plainly, when it isn&rsquo;t.</span>
              </li>
            </ul>
            <div className="mono text-sm mt-8">
              For the work that ends up in the public record.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
