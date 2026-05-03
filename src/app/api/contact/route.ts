import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  name: string;
  email: string;
  orgType?: string;
  workWasting?: string;
  interestType?: string;
  turnstileToken?: string;
}

function formatSlackMessage(payload: ContactPayload): string {
  const lines = [
    `*New contact form submission — Untrench*`,
    `*Name:* ${payload.name}`,
    `*Email:* ${payload.email}`,
    payload.orgType ? `*Org type:* ${payload.orgType}` : null,
    payload.interestType ? `*Looking for:* ${payload.interestType}` : null,
    payload.workWasting ? `*What's wasting time:*\n${payload.workWasting}` : null,
  ];
  return lines.filter(Boolean).join('\n');
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { name, email, turnstileToken } = body;

  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  // Turnstile verification
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (secretKey) {
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Missing Turnstile token' }, { status: 400 });
    }
    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: secretKey, response: turnstileToken }),
      });
      const result = await verifyRes.json() as { success: boolean };
      if (!result.success) {
        return NextResponse.json({ error: 'Turnstile verification failed' }, { status: 400 });
      }
    } catch (err) {
      console.error('Turnstile verification error:', err);
      return NextResponse.json({ error: 'Turnstile verification error' }, { status: 500 });
    }
  }

  // Forward to Slack
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  const message = formatSlackMessage(body);

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      });
    } catch (err) {
      console.error('Slack webhook error:', err);
      // Graceful fallback — don't 500 the user
    }
  } else {
    console.log('[contact] SLACK_WEBHOOK_URL not set. Submission:\n', message);
  }

  // Send email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: 'Untrench Contact <onboarding@resend.dev>',
        to: ['alex.aitest@polco.us', 'alex@polco.us'],
        subject: `New contact form submission from ${body.name}`,
        text: message,
      });
    } catch (err) {
      console.error('Resend email error:', err);
      // Graceful fallback — don't 500 the user
    }
  } else {
    console.log('[contact] RESEND_API_KEY not set. Would have emailed submission to alex.aitest@polco.us');
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
