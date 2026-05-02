import type { Metadata } from 'next';
import Link from 'next/link';
import PermitReviewDemo from '@/components/demos/PermitReviewDemo';

export const metadata: Metadata = {
  title: 'Permit Review Demo &middot; Untrench',
  description:
    'Watch the Untrench permit review agent read a submittal, cross-reference the code in force, and draft the reviewer\'s letter — in real time.',
};

export default function PermitReviewPage() {
  return (
    <div>
      {/* Header */}
      <header className="relative z-10 border-b hairline bg-[color:var(--paper)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <rect x="1" y="1" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
                <rect x="12" y="1" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
                <rect x="1" y="12" width="9" height="9" stroke="currentColor" strokeWidth="1.4" />
                <rect x="12" y="12" width="9" height="9" fill="currentColor" />
              </svg>
              <span className="display text-[18px] font-semibold">
                Untrench
              </span>
              <span className="hidden sm:inline-block mono text-[10px] uppercase tracking-[0.16em] opacity-60 border-l hairline pl-3">
                by Polco
              </span>
            </Link>
            <span className="hidden md:inline-block label opacity-50">Demo &middot; Permit review</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="status-pill">
              <span className="live-dot"></span> Demo mode
            </span>
            <Link href="/" className="text-sm hover:text-[color:var(--accent)]">
              &larr; Back to site
            </Link>
          </div>
        </div>
      </header>

      {/* Demo content — client component handles the rest */}
      <PermitReviewDemo />

      {/* Footer note */}
      <footer className="relative z-10 border-t hairline mt-12">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <div className="mono text-xs opacity-60">
            This is a simulated demo. The real product runs on your jurisdiction&rsquo;s code, your forms, and your reviewers&rsquo; voice.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/#contact" className="text-sm hover:text-[color:var(--accent)]">
              Get one of these for your jurisdiction <span className="caret">&rarr;</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
