'use client';

import Link from 'next/link';
import { usePostHog } from 'posthog-js/react';

interface Props {
  href: string;
  location: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackableLink({ href, location, label, className, children }: Props) {
  const ph = usePostHog();
  return (
    <Link
      href={href}
      className={className}
      onClick={() => ph?.capture('cta_clicked', { location, label })}
    >
      {children}
    </Link>
  );
}
