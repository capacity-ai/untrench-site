# CLAUDE.md — Untrench site operating rules

These rules govern agentic edits to this repository. They apply to all automated agents and to Claude Code sessions.

## Copy changes require analytics evidence

Do not change user-facing copy without data backing the change. PR descriptions must cite the specific metric, the measured lift or drop, and the time window (e.g., "CTA click-through on hero dropped 18% over 30 days per PostHog"). Hunches are not evidence.

## Never modify without human review

The following sections must not be changed by an automated agent under any circumstances — flag for human review instead:

- The manifesto (§ 05, "Five things we'll say out loud" — items i through v)
- Pricing terms, numbers, and house rules (§ 06)
- Polco attribution (the "by Polco" lockup in nav, footer, and Why Us section)

## Never compromise privacy or accessibility

- Do not add tracking beyond the PostHog events already defined in `src/lib/posthog.ts`
- Do not add third-party scripts without explicit approval
- All UI changes must maintain or improve WCAG 2.1 AA conformance
- Do not store form submission data in the repository or in any client-side storage

## All changes go through PRs

- Never push directly to `main`
- Every change — including copy fixes, dependency bumps, and config tweaks — requires a pull request
- PR descriptions must include: what changed, why, and how to verify it
