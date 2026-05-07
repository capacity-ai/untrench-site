export default function FAQ() {
  const items = [
    {
      q: "Why shouldn't we just use ChatGPT for this?",
      a: "If the work doesn't punish a 25% error rate, please do. ChatGPT is great for that. We're for the work where being wrong is expensive — council embarrassment, litigation risk, records requests, real dollars. And getting it right requires knowing things a general model doesn't: your adopted code, your prior decisions, your funders.",
    },
    {
      q: 'How does this fit our procurement?',
      a: "We're available through several cooperative purchasing agreements, can respond to RFPs directly, and have done piloted-then-purchased deployments before. Polco has been through this thousands of times. We'll send the procurement person to the procurement person.",
    },
    {
      q: 'How long does a project take?',
      a: 'A tailored deployment of one of our existing products (e.g. permit review configured for your code) is usually 4–8 weeks to a working system. Custom agents run 8–16 weeks. City-wide rollouts are quarter-scale projects. We’d rather give you a real number after a 30-minute call than a fake one now.',
    },
    {
      q: "Who owns the model? The data? The outputs?",
      a: "You do. We don't train on your data. We don't sell it. We don't pool it across jurisdictions. Outputs are subject to your records-retention rules, not ours, and we build with public records law in mind from day one.",
    },
    {
      q: 'What happens when the underlying models change?',
      a: "Every system we build comes with an eval suite that runs continuously against your data. When a model update shifts behavior, we catch it before it reaches a reviewer. That's just responsible practice for software running inside a public agency.",
    },
    {
      q: 'Are you going to tell us we need a chatbot?',
      a: "No. We might, sometimes, build something with a conversational element because it's genuinely the right interface for one part of the workflow. But the product is the workflow. The review, the draft, the queue. Not the chat.",
    },
  ];

  return (
    <section className="relative z-10 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label">&sect; 07 / FAQ</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[8vw] md:text-[5vw] lg:text-[68px] font-medium">
              Reasonable{/* br-ok */}<br />questions.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-16">
          <div className="col-span-12 lg:col-span-2"></div>
          <div className="col-span-12 lg:col-span-10 divide-y border-y hairline">
            {items.map((item, i) => (
              <details key={i} className="py-6 group">
                <summary className="flex items-start justify-between gap-6">
                  <span className="display text-2xl lg:text-3xl font-medium pr-4">{item.q}</span>
                  <span className="plus mono text-3xl leading-none mt-2 text-[color:var(--accent)]">+</span>
                </summary>
                <p className="mt-4 max-w-[60ch] leading-snug opacity-80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
