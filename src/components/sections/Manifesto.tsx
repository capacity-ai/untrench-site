export default function Manifesto() {
  return (
    <section id="manifesto" className="relative z-10 border-b hairline bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label" style={{ borderColor: 'var(--paper)' }}>&sect; 05 / What we believe</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[10vw] md:text-[7vw] lg:text-[96px] font-medium max-w-[16ch]">
              Five things we&rsquo;ll<br />
              say out loud.
            </h3>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2"></div>
          <div className="col-span-12 lg:col-span-10 space-y-12 lg:space-y-16">

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-1 manifesto-num text-5xl lg:text-6xl">i.</div>
              <div className="col-span-12 md:col-span-11">
                <h4 className="display text-3xl lg:text-4xl font-medium mb-3 max-w-[28ch]">
                  Most &ldquo;AI strategy&rdquo; is theater.
                </h4>
                <p className="text-lg leading-snug opacity-80 max-w-[60ch]">
                  Pilots that never ship. Demos rehearsed on cherry-picked inputs. Decks that say
                  &ldquo;agentic&rdquo; forty times. We&rsquo;re not interested. We ship things people use on Tuesdays.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-1 manifesto-num text-5xl lg:text-6xl">ii.</div>
              <div className="col-span-12 md:col-span-11">
                <h4 className="display text-3xl lg:text-4xl font-medium mb-3 max-w-[28ch]">
                  Without your data, the AI doesn&rsquo;t work.
                </h4>
                <p className="text-lg leading-snug opacity-80 max-w-[60ch]">
                  A general model that knows the average of the internet will give you the average
                  of the internet. That&rsquo;s exactly what you don&rsquo;t need. Your municipal code,
                  your prior reviews, your funder relationships, your reviewer&rsquo;s voice: that&rsquo;s
                  where the accuracy actually lives, and connecting it correctly is the part most
                  vendors get wrong. The AI is the easy part. The data plumbing is the job, and
                  it takes real expertise to get right.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-1 manifesto-num text-5xl lg:text-6xl">iii.</div>
              <div className="col-span-12 md:col-span-11">
                <h4 className="display text-3xl lg:text-4xl font-medium mb-3 max-w-[28ch]">
                  A chat box is not a product.
                </h4>
                <p className="text-lg leading-snug opacity-80 max-w-[60ch]">
                  Sometimes the right interface is a form. Or a queue. Or a dashboard. Or a
                  reviewable diff. We build whatever shape the work actually has, and we don&rsquo;t
                  default to a chat window because it was easy.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-1 manifesto-num text-5xl lg:text-6xl">iv.</div>
              <div className="col-span-12 md:col-span-11">
                <h4 className="display text-3xl lg:text-4xl font-medium mb-3 max-w-[28ch]">
                  Evals or it didn&rsquo;t happen.
                </h4>
                <p className="text-lg leading-snug opacity-80 max-w-[60ch]">
                  If we can&rsquo;t measure how often it&rsquo;s right, we don&rsquo;t ship it. If the number drops
                  after a model update, we know within an hour. The unsexy infrastructure is the
                  whole job.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-1 manifesto-num text-5xl lg:text-6xl">v.</div>
              <div className="col-span-12 md:col-span-11">
                <h4 className="display text-3xl lg:text-4xl font-medium mb-3 max-w-[28ch]">
                  The boring parts are the work.
                </h4>
                <p className="text-lg leading-snug opacity-80 max-w-[60ch]">
                  Schemas. Permissions. Audit logs. Fallbacks. Versioning. The stuff nobody puts on
                  a slide. That&rsquo;s where 75% becomes 99.5%, and that&rsquo;s what you&rsquo;re hiring us for.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
