import posthog from 'posthog-js';

export function captureCtaClick(location: string, label: string) {
  posthog.capture('cta_clicked', { location, label });
}

export function captureDemoStarted(demoSlug: string) {
  posthog.capture('demo_started', { demo_slug: demoSlug });
}

export function captureDemoCompleted(demoSlug: string, durationMs: number) {
  posthog.capture('demo_completed', { demo_slug: demoSlug, duration_ms: durationMs });
}

export function captureFormSubmitted(orgType: string, interestType: string) {
  posthog.capture('form_submitted', { org_type: orgType, interest_type: interestType });
}
