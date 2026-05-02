'use client';

import { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { captureFormSubmitted } from '@/lib/posthog';

type OrgType = 'city' | 'county' | 'state' | 'district' | 'other' | '';
type InterestType = 'existing' | 'custom' | 'rollout' | 'unsure' | '';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const ORG_OPTIONS: { value: OrgType; label: string }[] = [
  { value: 'city', label: 'City / municipality' },
  { value: 'county', label: 'County' },
  { value: 'state', label: 'State agency' },
  { value: 'district', label: 'Special district / authority' },
  { value: 'other', label: 'Something else' },
];

const INTEREST_OPTIONS: { value: InterestType; label: string }[] = [
  { value: 'existing', label: 'One of the five examples, tailored to us' },
  { value: 'custom', label: 'A custom agent for our workflow' },
  { value: 'rollout', label: 'City-wide / multi-department rollout' },
  { value: 'unsure', label: 'Honestly not sure yet' },
];

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orgType, setOrgType] = useState<OrgType>('');
  const [workWasting, setWorkWasting] = useState('');
  const [interestType, setInterestType] = useState<InterestType>('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const hasTurnstile = Boolean(siteKey);
  const canSubmit =
    name.trim() &&
    email.trim() &&
    status === 'idle' &&
    (!hasTurnstile || turnstileToken);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, orgType, workWasting, interestType, turnstileToken }),
      });

      if (res.ok) {
        captureFormSubmitted(orgType, interestType);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="relative z-10 border-b hairline bg-[color:var(--paper-deep)]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-2">
            <div className="section-rule label">&sect; 08 / Contact</div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h3 className="display text-[9vw] md:text-[6vw] lg:text-[88px] font-medium max-w-[16ch]">
              Tell us what your week<br />
              <span className="display-italic">is full of.</span>
            </h3>
            <p className="mt-6 max-w-[56ch] text-lg leading-snug opacity-80">
              Four short questions. A real human reads every one. If we&rsquo;re a fit, we&rsquo;ll say so within
              two business days. If we&rsquo;re not, we&rsquo;ll tell you that too, and probably point you
              toward someone who is.
            </p>
          </div>
        </div>

        {status === 'success' ? (
          <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-14">
            <div className="col-span-12 lg:col-span-2"></div>
            <div className="col-span-12 lg:col-span-10">
              <div className="border-l-2 border-[color:var(--accent)] pl-5 max-w-[56ch]">
                <div className="label mb-2" style={{ color: 'var(--accent)' }}>Sent.</div>
                <p className="text-lg leading-snug">
                  A real human will read this and reply within two business days. If we&rsquo;re a fit, we&rsquo;ll say so.
                  If we&rsquo;re not, we&rsquo;ll tell you that too.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6 lg:gap-10 mt-14">
            <div className="col-span-12 lg:col-span-2"></div>

            <div className="col-span-12 lg:col-span-10 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="label block mb-2 opacity-70">Your name</label>
                  <input
                    className="field"
                    type="text"
                    placeholder="Jane Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label block mb-2 opacity-70">Work email</label>
                  <input
                    className="field"
                    type="email"
                    placeholder="jane@org.gov"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="label block mb-2 opacity-70">Which best describes you?</label>
                <div className="flex flex-wrap gap-2">
                  {ORG_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`pill text-sm transition-colors ${orgType === opt.value ? 'selected' : 'hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]'}`}
                      onClick={() => setOrgType(orgType === opt.value ? '' : opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label block mb-2 opacity-70">What part of the work is wasting time?</label>
                <textarea
                  className="field resize-none"
                  rows={3}
                  placeholder="Be specific. 'Reviewing 200 permit submittals a week against a code that updated last month' beats 'we want to use AI.'"
                  value={workWasting}
                  onChange={(e) => setWorkWasting(e.target.value)}
                />
              </div>

              <div>
                <label className="label block mb-2 opacity-70">Which best describes what you&rsquo;re looking for?</label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`pill text-sm transition-colors ${interestType === opt.value ? 'selected' : 'hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]'}`}
                      onClick={() => setInterestType(interestType === opt.value ? '' : opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasTurnstile && (
                <div>
                  <Turnstile
                    siteKey={siteKey!}
                    onSuccess={setTurnstileToken}
                    onError={() => setTurnstileToken('')}
                    onExpire={() => setTurnstileToken('')}
                  />
                </div>
              )}

              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  className="btn-primary px-6 py-3 text-sm"
                  disabled={!canSubmit}
                >
                  {status === 'submitting' ? 'Sending...' : <>Send it <span className="caret">&rarr;</span></>}
                </button>
                {status === 'error' && (
                  <span className="mono text-xs text-[color:var(--accent)]">
                    Something went wrong. Try again or email hello@untrench.work.
                  </span>
                )}
                {status === 'idle' && (
                  <span className="mono text-xs opacity-60">No sales sequence. No drip campaign. Just a reply.</span>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
