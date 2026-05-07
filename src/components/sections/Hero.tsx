import TrackableLink from '@/components/TrackableLink';

export default function Hero() {
  return (
    <section className="relative z-10 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Left rail */}
          <div className="col-span-12 lg:col-span-2">
            <div className="reveal d1 label flex items-center gap-2">
              <span className="pulse-dot"></span>
              <span>No. 001 &mdash; 2026</span>
            </div>
          </div>

          {/* Headline */}
          <div className="col-span-12 lg:col-span-10">
            <div className="reveal d1 mb-6 lg:mb-8 mono text-xs uppercase tracking-[0.2em] flex items-center gap-3 opacity-80">
              <span className="inline-block w-8 h-px bg-current"></span>
              <span>For local and state government</span>
            </div>
            <h1 className="reveal d2 display text-[9vw] md:text-[7vw] lg:text-[96px] xl:text-[112px] font-semibold">
              Most <span className="display-italic">government</span> AI initiatives <span className="display-italic-heavy">don&rsquo;t work.</span>
            </h1>
            <h2 className="reveal d3 display text-[7vw] md:text-[5vw] lg:text-[64px] xl:text-[72px] mt-6 lg:mt-10 max-w-[18ch] font-medium">
              Ours do, because we do the <span className="accent-mark">unglamorous parts</span>.
            </h2>
          </div>
        </div>

        {/* Sub-grid */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-16 lg:mt-24">
          <div className="col-span-12 lg:col-span-2">
            <div className="reveal d4 label">The pitch</div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <p className="reveal d4 text-xl lg:text-2xl leading-snug max-w-[46ch]">
              <span className="display-italic">National AI Lab</span> builds agentic systems for cities, counties, and the agencies that serve them.
              We focus on the work where being wrong is <em className="display-italic">expensive.</em>{' '}
              Permits. Grants. RFPs. Code. Constituent mail.
              If a chatbot can handle it, use a chatbot. If it has to be right, that&rsquo;s us.
            </p>
            <p className="reveal d5 mt-5 text-base lg:text-lg leading-snug max-w-[46ch] opacity-70">
              Getting it right means the work most vendors skip: live connections into the systems your staff actually use,
              retrieval built around how local code is structured rather than which words match,
              and a test suite running against real permit history before the thing ever sees a reviewer.
              If you don&rsquo;t know what that last sentence means, that&rsquo;s exactly the point.
            </p>
            <div className="reveal d5 mt-10 flex flex-wrap gap-3">
              <TrackableLink
                href="#examples"
                location="hero"
                label="Try a live demo"
                className="btn-primary px-5 py-3 text-sm"
              >
                Try a live demo <span className="caret">&rarr;</span>
              </TrackableLink>
              <TrackableLink
                href="#contact"
                location="hero"
                label="Tell us your problem"
                className="btn-ghost px-5 py-3 text-sm"
              >
                Tell us your problem
              </TrackableLink>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:border-l hairline lg:pl-8">
            <div className="reveal d5 label mb-4">Built by</div>
            <p className="reveal d5 text-[15px] leading-snug mb-6">
              <span className="display-italic">Polco.</span> Three decades and ~1,000 cities of civic data and trust.
              We know what good looks like in local government, and what gets sold to it that <em>isn&rsquo;t</em>.
            </p>
            <div className="reveal d5 label mb-3 opacity-70">Built for</div>
            <ul className="reveal d5 mono text-[13px] space-y-1.5 leading-relaxed">
              <li>City &amp; county staff</li>
              <li>Planning &amp; permitting</li>
              <li>Grants &amp; budget offices</li>
              <li>Procurement &amp; legal</li>
              <li>Council &amp; constituent services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee border-t hairline py-5 bg-[color:var(--paper-deep)]">
        <div className="marquee-track">
          <div className="flex items-center gap-12 mono text-sm whitespace-nowrap pr-12">
            <span>More capacity for the work that matters</span>
            <span>&loz;</span>
            <span>Built for cities, counties, and special districts</span>
            <span>&loz;</span>
            <span>Your codes, not the internet&rsquo;s average</span>
            <span>&loz;</span>
            <span>99.5% beats 75%, especially under public records law</span>
            <span>&loz;</span>
            <span>~1,000 cities served, 50 states, 30+ years</span>
            <span>&loz;</span>
            <span>If a chatbot solves it, use a chatbot</span>
            <span>&loz;</span>
          </div>
          <div className="flex items-center gap-12 mono text-sm whitespace-nowrap pr-12" aria-hidden="true">
            <span>More capacity for the work that matters</span>
            <span>&loz;</span>
            <span>Built for cities, counties, and special districts</span>
            <span>&loz;</span>
            <span>Your codes, not the internet&rsquo;s average</span>
            <span>&loz;</span>
            <span>99.5% beats 75%, especially under public records law</span>
            <span>&loz;</span>
            <span>~1,000 cities served, 50 states, 30+ years</span>
            <span>&loz;</span>
            <span>If a chatbot solves it, use a chatbot</span>
            <span>&loz;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
