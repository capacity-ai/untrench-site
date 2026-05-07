import TrackableLink from '@/components/TrackableLink';

export default function OtherShapes() {
  return (
    <section className="relative z-10 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label">&sect; 04 / Other shapes</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[8vw] md:text-[5vw] lg:text-[68px] font-medium max-w-[22ch]">
              The five above are examples,{/* br-ok */}<br />
              <span className="display-italic">not a menu.</span>
            </h3>
            <p className="mt-6 max-w-[58ch] text-lg leading-snug opacity-80">
              Most of what we build is shaped to a specific city, county, or agency. The patterns repeat
              — review, draft, triage, audit — but the jurisdiction is always the source of truth:
              the code in force, adopted standards, how things have actually been decided.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-14 lg:mt-20">
          <div className="col-span-12 lg:col-span-2"></div>

          <TrackableLink
            href="#contact"
            location="other-shapes"
            label="Start there"
            className="col-span-12 md:col-span-6 lg:col-span-5 group block border hairline p-8 lg:p-10 hover:bg-[color:var(--paper-deep)] transition-colors"
          >
            <div className="label mb-4">Custom build</div>
            <h4 className="display text-3xl lg:text-4xl font-medium mb-4 max-w-[18ch]">
              What&rsquo;s the most wasteful part{/* br-ok */}<br />of your team&rsquo;s week?
            </h4>
            <p className="text-[16px] leading-snug opacity-80 max-w-[40ch]">
              Tell us what&rsquo;s eating your staff&rsquo;s time. Two questions, no deck.
              If it&rsquo;s something we can fix, we&rsquo;ll say so. If it isn&rsquo;t, we&rsquo;ll say that too.
            </p>
            <div className="mt-6 mono text-sm flex items-center gap-2">
              Start there <span className="caret">&rarr;</span>
            </div>
          </TrackableLink>

          <TrackableLink
            href="#contact"
            location="other-shapes"
            label="Let's talk rollout"
            className="col-span-12 md:col-span-6 lg:col-span-5 group block border hairline p-8 lg:p-10 bg-[color:var(--ink)] text-[color:var(--paper)] hover:bg-[color:var(--accent)] transition-colors"
          >
            <div className="label mb-4 opacity-70">City-wide rollout</div>
            <h4 className="display text-3xl lg:text-4xl font-medium mb-4 max-w-[18ch]">
              Rolling this out{/* br-ok */}<br />
              <span className="display-italic">across departments?</span>
            </h4>
            <p className="text-[16px] leading-snug opacity-80 max-w-[40ch]">
              Multi-department deployments, integrations with your existing systems (GIS, permitting, ERP, CRM),
              procurement support, and the evals to prove it works at scale. We do those.
            </p>
            <div className="mt-6 mono text-sm flex items-center gap-2">
              Let&rsquo;s talk <span className="caret">&rarr;</span>
            </div>
          </TrackableLink>
        </div>
      </div>
    </section>
  );
}
