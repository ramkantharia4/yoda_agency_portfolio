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
                to: ['praptisharma2006@gmail.com'], // Your email
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
