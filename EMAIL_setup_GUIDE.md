# Email Notification Setup Guide

To receive emails whenever a client submits a form, we recommend using **Supabase Edge Functions** combined with **Resend**. This is the most professional and secure method.

## 1. Create a Resend Account
1. Go to [resend.com](https://resend.com/) and create a free account.
2. Get your **API Key** from the dashboard.
3. (Optional) Verify your domain to send emails from your own address (e.g., `hello@yourdomain.com`). By default, you can send to yourself using their testing domain.

## 2. Set Up Supabase Secrets
In your terminal, or via the Supabase Dashboard (Settings > API > Secrets), add your Resend API key:
```bash
supabase secrets set RESEND_API_KEY=re_QErDbPjX_7Mkh99kYDujxo527RN5Lej8z
```

## 3. Create the Edge Function
Create a new Edge Function in Supabase called `send-notification`. Use the following code template:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend"

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

serve(async (req) => {
  const { record, table } = await req.json()

  let subject = ""
  let html = ""

  if (table === 'project_initiations') {
    subject = `🚀 New Project: ${record.name}`
    html = `
      <h1>New Project Initiation</h1>
      <p><strong>Name:</strong> ${record.name}</p>
      <p><strong>Email:</strong> ${record.email}</p>
      <p><strong>Business:</strong> ${record.business_type}</p>
      <p><strong>Website:</strong> ${record.website || 'N/A'}</p>
      <p><strong>Requirements:</strong></p>
      <p>${record.requirements}</p>
    `
  } else if (table === 'meetings') {
    subject = `🗓️ New Meeting: ${record.email}`
    html = `
      <h1>New Meeting Scheduled</h1>
      <p><strong>Client Email:</strong> ${record.email}</p>
      <p><strong>Date:</strong> ${record.date}</p>
      <p><strong>Time:</strong> ${record.time}</p>
      <p><strong>Goals:</strong> ${record.goals}</p>
    `
  }

  const { data, error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: ['YOUR_EMAIL_HERE'], // Replace with your email
    subject: subject,
    html: html,
  })

  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } })
})
```

## 4. Enable Database Webhooks
1. Go to **Database > Webhooks** in your Supabase dashboard.
2. Create a new Webhook for `project_initiations` (on INSERT).
3. Set the type to **Edge Function** and select `send-notification`.
4. Repeat for the `meetings` table.

---

### Alternative: zapier / Make.com (No Code)
If you prefer not to write code, you can use Zapier:
1. Trigger: **Supabase** (New Row in Table).
2. Action: **Gmail** (Send Email).
3. Connect your Supabase table and map the fields to an email.
