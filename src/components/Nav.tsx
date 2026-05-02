import Link from 'next/link';
import TrackableLink from './TrackableLink';

export default function Nav() {
  return (
    <header className="relative z-10 border-b hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
            <rect x="12" y="1" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
            <rect x="1" y="12" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
            <rect x="12" y="12" width="9" height="9" fill="currentColor" />
          </svg>
          <span className="display text-[22px] font-semibold tracking-tight">Untrench</span>
          <span className="hidden sm:inline-block mono text-[10px] uppercase tracking-[0.16em] opacity-60 border-l hairline pl-3">
            by Polco
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-sm">
          <a href="#examples" className="hover:text-[color:var(--accent)] transition-colors">Examples</a>
          <a href="#approach" className="hover:text-[color:var(--accent)] transition-colors">Approach</a>
          <a href="#manifesto" className="hover:text-[color:var(--accent)] transition-colors">What we believe</a>
          <a href="#why" className="hover:text-[color:var(--accent)] transition-colors">Why us</a>
          <a href="#pricing" className="hover:text-[color:var(--accent)] transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-[color:var(--accent)] transition-colors">Contact</a>
        </nav>

        <TrackableLink href="#contact" location="nav" label="Talk to us" className="btn-primary text-sm px-4 py-2">
          Talk to us <span className="caret">&rarr;</span>
        </TrackableLink>
      </div>
    </header>
  );
}
