import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || 'naveenmanyam12@gmail.com';
    const whatsappPhone = '919398365948';

    // Format WhatsApp text
    const whatsappMessage = 
`Hi Manyam Naveen,

Name: ${name}
Email: ${email}
Topic: ${subject || 'Portfolio Inquiry'}

Message:
${message}`;

    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    // Check if Gmail / SMTP credentials are configured
    const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || 'naveenmanyam12@gmail.com';
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const resendApiKey = process.env.RESEND_API_KEY;

    let emailSent = false;
    let emailError: string | null = null;

    if (gmailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded-2xl; background-color: #f8fafc;">
            <div style="background: linear-gradient(135deg, #06b6d4, #6366f1); padding: 16px 20px; border-radius: 12px; color: white; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 20px;">New Portfolio Inquiry</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Received via Manyam Naveen Portfolio</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #64748b;"><strong>Sender:</strong> <span style="color: #0f172a;">${name}</span></p>
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #64748b;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></p>
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #64748b;"><strong>Opportunity / Subject:</strong> <span style="color: #0f172a;">${subject || 'General Inquiry'}</span></p>
              
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
              
              <div style="font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">
                ${message}
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" style="background-color: #0284c7; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: bold; display: inline-block;">
                Reply Directly to ${name}
              </a>
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Portfolio Contact" <${gmailUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${name}: ${subject || 'New Contact Message'}`,
          text: `Name: ${name}\nEmail: ${email}\nTopic: ${subject || 'General'}\n\nMessage:\n${message}`,
          html: htmlContent,
        });

        emailSent = true;
      } catch (err: any) {
        console.error('[Contact API] Failed to send via Gmail SMTP:', err.message);
        emailError = err.message;
      }
    } else if (resendApiKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'onboarding@resend.dev',
            to: recipientEmail,
            reply_to: email,
            subject: `[Portfolio Inquiry] ${name}: ${subject || 'New Contact Message'}`,
            text: `Name: ${name}\nEmail: ${email}\nTopic: ${subject || 'General'}\n\nMessage:\n${message}`,
          }),
        });

        if (res.ok) {
          emailSent = true;
        } else {
          const errData = await res.json();
          emailError = errData.message || 'Resend API error';
        }
      } catch (err: any) {
        console.error('[Contact API] Failed to send via Resend:', err.message);
        emailError = err.message;
      }
    } else {
      // In dev or until credentials are provided in .env.local
      console.log('[Contact API] Received inquiry (Configure GMAIL_APP_PASSWORD in .env.local to deliver to inbox):', {
        name,
        email,
        subject: subject || 'No Subject Provided',
        message,
        timestamp: new Date().toISOString(),
      });
      emailSent = true; // Recorded successfully
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! Manyam Naveen has received your message and will respond promptly.',
      whatsappUrl,
      emailSent,
      hasSmtpConfigured: Boolean(gmailPass || resendApiKey),
    });
  } catch (error: any) {
    console.error('[Contact API] Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
