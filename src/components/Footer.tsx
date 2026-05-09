export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex items-baseline gap-4 flex-wrap">
              <div className="display text-5xl lg:text-7xl font-medium leading-none">Untrench</div>
              <div className="mono text-xs uppercase tracking-[0.16em] opacity-60">by Polco</div>
            </div>
            <p className="mono text-xs opacity-60 mt-4">
              Agentic systems for local government. Est. 2026.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="label mb-3 opacity-60">Site</div>
            <ul className="space-y-1.5 text-sm">
              <li><a href="#examples" className="hover:text-[color:var(--accent)]">Examples</a></li>
              <li><a href="#approach" className="hover:text-[color:var(--accent)]">Approach</a></li>
              <li><a href="#manifesto" className="hover:text-[color:var(--accent)]">What we believe</a></li>
              <li><a href="#why" className="hover:text-[color:var(--accent)]">Why us</a></li>
              <li><a href="#pricing" className="hover:text-[color:var(--accent)]">Pricing</a></li>
              <li><a href="#contact" className="hover:text-[color:var(--accent)]">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="label mb-3 opacity-60">Elsewhere</div>
            <ul className="space-y-1.5 text-sm">
              <li><a href="mailto:hello@nationalailab.com" className="hover:text-[color:var(--accent)]">hello@nationalailab.com</a></li>
              <li><a href="https://polco.us" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--accent)]">polco.us</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--accent)]">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t hairline flex flex-wrap items-center justify-between gap-4">
          <div className="mono text-xs opacity-50">&copy; 2026 Polco, Inc. &middot; Untrench is a Polco product.</div>
          <div className="mono text-xs opacity-50">Built with the boring parts done right.</div>
        </div>
      </div>
    </footer>
  );
}
