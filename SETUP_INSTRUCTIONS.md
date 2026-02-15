# 📧 Email Notification Setup - Dashboard Method

Since we're setting this up via the Supabase Dashboard, follow these steps:

## ✅ What I've Already Done

1. ✅ Created the Edge Function code at `supabase/functions/send-notification/index.ts`
2. ✅ Configured it with your Resend API key: `re_RJnkMbAc_BdURTyYHuwsprND8cnLHS3Fs`
3. ✅ Set your email to receive notifications: `praptisharma2006@gmail.com`

---

## 🚀 What You Need to Do (5-10 minutes)

### Step 1: Go to Your Supabase Dashboard

Open: [https://supabase.com/dashboard/project/brmpjvtdhccybgdshhqf](https://supabase.com/dashboard/project/brmpjvtdhccybgdshhqf)

---

### Step 2: Set the Resend API Key as a Secret

1. In the left sidebar, click **Settings** (gear icon at bottom)
2. Click **Secrets** under Configuration
3. Click **Add new secret**
4. Enter:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_RJnkMbAc_BdURTyYHuwsprND8cnLHS3Fs`
5. Click **Save**

---

### Step 3: Create the Edge Function

1. In the left sidebar, click **Edge Functions**
2. Click **Create a new function**
3. Enter:
   - **Function name**: `send-notification`
4. Click **Create function**
5. **Copy and paste** the entire code from this file:
   `supabase/functions/send-notification/index.ts`
6. Click **Deploy** (top right)

---

### Step 4: Create Webhook for Project Initiations

1. In the left sidebar, click **Database**
2. Click **Webhooks** tab
3. Click **Create a new hook**
4. Configure:
   - **Name**: `project-initiation-email`
   - **Table**: `project_initiations`
   - **Events**: Check ✅ **Insert**
   - **Type**: Select **Supabase Edge Function**
   - **Edge Function**: Select `send-notification`
   - **HTTP Headers**: Click **Add header**
     - **Key**: `Content-Type`
     - **Value**: `application/json`
5. Click **Create webhook**

---

### Step 5: Create Webhook for Meeting Bookings

1. Still in **Database** → **Webhooks**
2. Click **Create a new hook** again
3. Configure:
   - **Name**: `meeting-booking-email`
   - **Table**: `meetings`
   - **Events**: Check ✅ **Insert**
   - **Type**: Select **Supabase Edge Function**
   - **Edge Function**: Select `send-notification`
   - **HTTP Headers**: Click **Add header**
     - **Key**: `Content-Type`
     - **Value**: `application/json`
4. Click **Create webhook**

---

### Step 6: Test It! 🎉

#### Test Project Initiation:
1. Go to your website: http://localhost:5173/start
2. Fill out the project form
3. Submit
4. Check your email: **praptisharma2006@gmail.com**

#### Test Meeting Booking:
1. Go to: http://localhost:5173/meeting
2. Select a date and time
3. Fill in email and goals
4. Submit
5. Check your email again!

---

## 🔍 Troubleshooting

### If you don't receive emails:

1. **Check Edge Function Logs**:
   - Go to **Edge Functions** → `send-notification` → **Logs** tab
   - Look for any errors

2. **Check Webhook Logs**:
   - Go to **Database** → **Webhooks**
   - Click on your webhook name
   - Check the **Logs** tab for execution history

3. **Check Spam Folder**:
   - Emails from `onboarding@resend.dev` might go to spam initially

4. **Verify Secret is Set**:
   - Go to **Settings** → **Secrets**
   - Confirm `RESEND_API_KEY` is listed

---

## 📝 Important Notes

- **Free Tier Limits**: Resend free tier allows 100 emails/day
- **From Address**: Currently using `onboarding@resend.dev` (Resend's test domain)
- **To Verify Your Domain** (Optional for production):
  1. Go to [Resend Dashboard](https://resend.com/domains)
  2. Add your domain
  3. Add the DNS records they provide
  4. Update the `from` field in the Edge Function to use your domain

---

## ✨ What You'll Get

When someone submits a form, you'll receive a beautiful HTML email with:

**For Project Initiations:**
- 🚀 Client name
- 📧 Email address
- 💼 Business type
- 🌐 Website (if provided)
- 📝 Project requirements
- ⏰ Submission timestamp

**For Meeting Bookings:**
- 🗓️ Meeting date and time
- 📧 Client email
- 🎯 Project goals
- ⏰ Booking timestamp

---

## 🎯 Quick Checklist

- [ ] Set `RESEND_API_KEY` secret in Supabase
- [ ] Create `send-notification` Edge Function
- [ ] Deploy the Edge Function
- [ ] Create webhook for `project_initiations` table
- [ ] Create webhook for `meetings` table
- [ ] Test project initiation form
- [ ] Test meeting booking form
- [ ] Receive emails successfully! 🎉

---

**Need help?** Check the logs in Supabase Dashboard or let me know what error you're seeing!
