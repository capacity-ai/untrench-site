export default function WhyUs() {
  return (
    <section id="why" className="relative z-10 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label">&sect; 02 / Why us</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[8vw] md:text-[5vw] lg:text-[68px] font-medium max-w-[20ch]">
              We knew we<br />
              <span className="display-italic">had to build this.</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-14 lg:mt-20">
          <div className="col-span-12 lg:col-span-2"></div>
          <div className="col-span-12 lg:col-span-7 space-y-6 text-lg leading-snug max-w-[58ch]">
            <p>
              We&rsquo;re Polco. For 30 years we&rsquo;ve helped nearly 1,000 cities, in every state, understand
              what their residents actually think and make better decisions with real data.
              That&rsquo;s our day job, and we&rsquo;re good at it.
            </p>
            <p>
              We didn&rsquo;t set out to build agentic AI products. We started <span className="display-italic">National AI Lab</span>{' '}
              because we kept watching the same thing happen: vendors selling local governments expensive, brittle
              &ldquo;AI solutions&rdquo; that hallucinate code citations, ignore the actual jurisdiction,
              and produce work nobody on staff would sign their name to.
              Cities deserve better than that. We knew we were the right people to build it.
            </p>
            <p>
              The name is the promise. Cities don&rsquo;t have a time problem. They have a <em className="display-italic">capacity</em> problem.
              Too few staff, too much work, no room to do anything new. We give that capacity back, built on
              <em> your</em> codes, your prior decisions, your funders, your voice, and the institutional knowledge
              we&rsquo;ve earned across a thousand civic relationships.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:border-l hairline lg:pl-8">
            <div className="label mb-4 opacity-70">Polco, in numbers</div>
            <ul className="space-y-5">
              <li>
                <div className="display text-4xl font-medium num">30+</div>
                <div className="mono text-xs opacity-60 mt-1">years of civic data</div>
              </li>
              <li>
                <div className="display text-4xl font-medium num">~1,000</div>
                <div className="mono text-xs opacity-60 mt-1">cities served</div>
              </li>
              <li>
                <div className="display text-4xl font-medium num">50</div>
                <div className="mono text-xs opacity-60 mt-1">states represented</div>
              </li>
              <li>
                <div className="display text-4xl font-medium num">1</div>
                <div className="mono text-xs opacity-60 mt-1">reason we built this</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
