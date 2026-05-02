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
              The five above are examples,<br />
              <span className="display-italic">not a menu.</span>
            </h3>
            <p className="mt-6 max-w-[58ch] text-lg leading-snug opacity-80">
              Most of what we build is shaped to a specific city, county, or agency. The patterns repeat
              (review, draft, triage, audit), but your code, your forms, your funders,
              and your voice are always the source of truth.
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
              Tell us what part of your week<br />you&rsquo;d hand off if you could.
            </h4>
            <p className="text-[16px] leading-snug opacity-80 max-w-[40ch]">
              Two questions, no demo deck. If it&rsquo;s the kind of work we do well, we&rsquo;ll say so.
              If it isn&rsquo;t, we&rsquo;ll point you somewhere better.
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
              Rolling this out<br />
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
