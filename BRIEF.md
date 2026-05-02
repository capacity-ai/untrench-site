# Untrench marketing site — initial build

## What this is

A marketing site for **Untrench, by Polco** — an agentic AI product for local government, built on Polco's 30 years of civic data and trust across nearly 1,000 cities.

The static HTML scaffold for the site is in `/scaffold/`. Convert it into a real production app and deploy it.

**Important:** the scaffold HTML files reference an older brand name (`CapaCity`). The actual brand is **Untrench**. When porting the HTML to React, replace all `CapaCity` / `Capacity` references with `Untrench`. The visual design and copy structure should be preserved exactly; only the brand name changes.

## Brand

- Product name: **Untrench**
- Parent brand: **Polco**
- Lockup pattern: `Untrench, by Polco` — with the parent brand attribution rendered in smaller mono caps next to the wordmark
- Primary domain: `untrench.work`
- Redirect domain: `getuntrench.com` → `untrench.work` (already configured at Cloudflare)
- Tone: editorial, plain-spoken, slightly spiky. See the manifesto and comparison sections in `/scaffold/index.html` for voice reference.

## Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS. Preserve all existing design tokens — the warm paper palette, Fraunces serif, Inter Tight body, JetBrains Mono labels, and the rust accent color
- **Deployment:** Vercel
- **Analytics:** PostHog
- **Form delivery:** Slack webhook (env var `SLACK_WEBHOOK_URL`). I'll add this later — leave the env var reference in place but treat absence gracefully (log to console, return 200)
- **Spam protection:** Cloudflare Turnstile on the contact form
- **Repo:** GitHub, public repo named `untrench-site`

## Tasks, in order

1. **Initialize Next.js project.** TypeScript, App Router, Tailwind. Port the static HTML in `/scaffold/` into proper React components. Preserve all visual design exactly — including the editorial typography, section numbering (§ 01 through § 08), the demo card grid, the manifesto, and the pricing structure.

2. **Set up routes:**
   - `/` — main marketing page (from `/scaffold/index.html`)
   - `/demos/permit-review` — interactive demo (from `/scaffold/permit-review-demo.html`). Keep the scripted simulation for now; we'll swap to real LLM calls in a later phase.

3. **Wire the contact form** to POST to `/api/contact`, which:
   - Validates input
   - Verifies Turnstile token
   - Forwards to Slack via `SLACK_WEBHOOK_URL` (graceful fallback if env var missing — log to console and return 200)
   - Fires a PostHog event `form_submitted` with `org_type` and `interest_type` properties

4. **Wire PostHog** with these events:
   - `page_viewed` (auto)
   - `cta_clicked { location, label }` on every primary CTA
   - `demo_started { demo_slug }` when a scenario starts
   - `demo_completed { demo_slug, duration_ms }` when complete
   - `form_submitted { org_type, interest_type }` on form submit

5. **Create CLAUDE.md** at the repo root with operating rules for future agentic edits to this site:
   - Site copy changes must be backed by analytics evidence; cite the metric and time window in PR descriptions
   - Never modify the manifesto, pricing terms, or Polco attribution without human review
   - Never add features that would compromise privacy or accessibility
   - All changes go through PRs; never push to main directly

6. **Deploy to Vercel.** Production domain: `untrench.work`. Surface DNS instructions; I'll add the records at Cloudflare.

7. **Initialize GitHub repo** and push. Configure branch protection on `main` (require PR review).

## Credentials

I'll provide via `vercel env add` or paste into `.env.local`:

- `ANTHROPIC_API_KEY`
- `POSTHOG_PROJECT_KEY`
- `TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `SLACK_WEBHOOK_URL` (deferred)

## Important constraints

- **Preserve the brand voice.** Don't smooth out the spiky copy. Phrases like "If a chatbot can solve it, use a chatbot" and "Most AI projects don't work" are intentional and should not be softened.
- **Preserve the editorial design.** The site is intentionally not a typical SaaS landing page. Don't add gradients, glow effects, or generic AI imagery.
- **Preserve the section structure** of the static HTML — same eight sections in the same order.
- **No em-dashes in user-facing copy.** They were deliberately removed.
- **Polco attribution stays.** The "by Polco" lockup appears in the nav, footer, and "Why us" section. Don't drop it.
- **Logo exploration files are reference only.** If `logo-exploration-v3.html` is in the scaffold folder, it's a design exploration document, not a deliverable. Skip it.
- **There is a small bug in the permit-review-demo.html docTitle subheader** (the placeholder text is malformed). Fix it during the port.

## What to do first

Read this brief, read the files in `/scaffold/`, then come back to me with a concrete plan: file structure you'll create, packages you'll install, and the order you'll do tasks 1–7 in. I want to approve the plan before you start executing.

**Don't start building until I say go.**
