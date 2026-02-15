# Complete Email Notification Setup Guide

This guide will help you set up automatic email notifications when clients submit the "Start Project" form or book a meeting.

## Prerequisites

1. **Resend Account**: Sign up at [resend.com](https://resend.com/) (free tier available)
2. **Supabase Project**: Your project is already set up
3. **Supabase CLI**: Install if you haven't already

---

## Step 1: Get Your Resend API Key

1. Go to [resend.com](https://resend.com/) and sign up/login
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Copy the API key (starts with `re_`)
5. **Important**: For production, verify your domain in Resend to send from your own email address

---

## Step 2: Install Supabase CLI (if not installed)

```powershell
# Install via npm
npm install -g supabase

# Or via scoop (Windows package manager)
scoop bucket add supabase https://github.com/supabase/scoop-bucket.git
scoop install supabase
```

---

## Step 3: Link Your Supabase Project

```powershell
# Login to Supabase
supabase login

# Link to your project (you'll need your project ref: brmpjvtdhccybgdshhqf)
supabase link --project-ref brmpjvtdhccybgdshhqf
```

---

## Step 4: Set Resend API Key as Secret

```powershell
# Replace YOUR_RESEND_API_KEY with your actual key
supabase secrets set RESEND_API_KEY=YOUR_RESEND_API_KEY
```

---

## Step 5: Create Edge Function

### Option A: Using Supabase CLI (Recommended)

```powershell
# Create a new edge function
supabase functions new send-notification
```

This creates a folder at `supabase/functions/send-notification/index.ts`

### Option B: Manual Creation via Dashboard

1. Go to your Supabase dashboard
2. Navigate to **Edge Functions**
3. Click **Create a new function**
4. Name it `send-notification`

---

## Step 6: Add the Edge Function Code

Copy this code into `supabase/functions/send-notification/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const { record, table, type } = await req.json()
    
    // Only process INSERT events
    if (type !== 'INSERT') {
      return new Response(JSON.stringify({ message: 'Not an INSERT event' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      })
    }

    let subject = ""
    let html = ""
    
    // Handle project initiations
    if (table === 'project_initiations') {
      subject = `🚀 New Project Initiation: ${record.name}`
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Project Initiation</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Client Name:</div>
                <div class="value">${record.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${record.email}">${record.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Business Type:</div>
                <div class="value">${record.business_type}</div>
              </div>
              <div class="field">
                <div class="label">Website:</div>
                <div class="value">${record.website || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">Requirements:</div>
                <div class="value">${record.requirements}</div>
              </div>
              <div class="field">
                <div class="label">Submitted:</div>
                <div class="value">${new Date(record.created_at).toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    } 
    // Handle meeting bookings
    else if (table === 'meetings') {
      subject = `🗓️ New Meeting Booked: ${record.email}`
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #3b82f6; }
            .value { margin-top: 5px; }
            .highlight { background: #3b82f6; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🗓️ New Meeting Scheduled</h1>
            </div>
            <div class="content">
              <div class="highlight">
                <strong>📅 ${record.date} at ${record.time}</strong>
              </div>
              <div class="field">
                <div class="label">Client Email:</div>
                <div class="value"><a href="mailto:${record.email}">${record.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Project Goals:</div>
                <div class="value">${record.goals}</div>
              </div>
              <div class="field">
                <div class="label">Booked:</div>
                <div class="value">${new Date(record.created_at).toLocaleString()}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    }

    // Send email via Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'YodaDayo Portfolio <onboarding@resend.dev>',
        to: ['YOUR_EMAIL@example.com'], // ⚠️ REPLACE WITH YOUR EMAIL
        subject: subject,
        html: html,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      return new Response(JSON.stringify({ success: true, data }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      })
    } else {
      throw new Error(JSON.stringify(data))
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
```

**⚠️ IMPORTANT**: Replace `YOUR_EMAIL@example.com` with your actual email address!

---

## Step 7: Deploy the Edge Function

```powershell
# Deploy the function
supabase functions deploy send-notification
```

---

## Step 8: Set Up Database Webhooks

### For Project Initiations:

1. Go to your Supabase dashboard → **Database** → **Webhooks**
2. Click **Create a new hook**
3. Configure:
   - **Name**: `project-initiation-email`
   - **Table**: `project_initiations`
   - **Events**: Check **Insert**
   - **Type**: Select **Supabase Edge Function**
   - **Edge Function**: Select `send-notification`
   - **HTTP Headers**: Add header
     - Key: `Content-Type`
     - Value: `application/json`
4. Click **Create webhook**

### For Meeting Bookings:

1. Click **Create a new hook** again
2. Configure:
   - **Name**: `meeting-booking-email`
   - **Table**: `meetings`
   - **Events**: Check **Insert**
   - **Type**: Select **Supabase Edge Function**
   - **Edge Function**: Select `send-notification`
   - **HTTP Headers**: Add header
     - Key: `Content-Type`
     - Value: `application/json`
3. Click **Create webhook**

---

## Step 9: Test the Setup

### Test Project Initiation:

1. Go to your portfolio website
2. Navigate to `/start`
3. Fill out the project initiation form
4. Submit
5. Check your email inbox (and spam folder)

### Test Meeting Booking:

1. Go to `/meeting`
2. Select a date and time
3. Fill in email and goals
4. Submit
5. Check your email inbox

---

## Troubleshooting

### Email Not Received?

1. **Check Supabase Logs**:
   - Go to **Edge Functions** → `send-notification` → **Logs**
   - Look for errors

2. **Check Webhook Logs**:
   - Go to **Database** → **Webhooks**
   - Click on your webhook
   - Check the **Logs** tab

3. **Verify Resend API Key**:
   ```powershell
   supabase secrets list
   ```

4. **Check Spam Folder**: Resend's default domain might be flagged

5. **Verify Domain** (Production):
   - In Resend dashboard, add and verify your domain
   - Update the `from` field in the Edge Function to use your domain

---

## Production Recommendations

### 1. Verify Your Domain in Resend

- Go to Resend dashboard → **Domains**
- Add your domain (e.g., `yodadayo.com`)
- Add the DNS records they provide
- Once verified, update the Edge Function:
  ```typescript
  from: 'YodaDayo <hello@yodadayo.com>',
  ```

### 2. Use Environment-Specific Emails

Update the Edge Function to use different emails for testing:

```typescript
const TO_EMAIL = Deno.env.get('NOTIFICATION_EMAIL') || 'YOUR_EMAIL@example.com'
```

Then set it:
```powershell
supabase secrets set NOTIFICATION_EMAIL=your@email.com
```

### 3. Add Email Templates

Consider creating reusable HTML email templates for better branding.

---

## Alternative: Quick Setup with Zapier (No Code)

If you prefer not to use Edge Functions:

1. Sign up for [Zapier](https://zapier.com/)
2. Create a new Zap:
   - **Trigger**: Supabase (New Row)
   - **Action**: Gmail/Email (Send Email)
3. Connect your Supabase account
4. Select the table (`project_initiations` or `meetings`)
5. Map the fields to your email template
6. Test and activate

---

## Need Help?

If you encounter any issues:
1. Check the Supabase Edge Function logs
2. Check the Webhook logs
3. Verify your Resend API key is correct
4. Make sure you replaced `YOUR_EMAIL@example.com` in the code

---

## Summary Checklist

- [ ] Created Resend account and got API key
- [ ] Installed Supabase CLI
- [ ] Linked Supabase project
- [ ] Set RESEND_API_KEY secret
- [ ] Created `send-notification` Edge Function
- [ ] Replaced `YOUR_EMAIL@example.com` in the code
- [ ] Deployed the Edge Function
- [ ] Created webhook for `project_initiations` table
- [ ] Created webhook for `meetings` table
- [ ] Tested project initiation form
- [ ] Tested meeting booking form
- [ ] Received test emails successfully

Once all steps are complete, you'll receive beautiful HTML emails every time a client submits a form! 🎉
