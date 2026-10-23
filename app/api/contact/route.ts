import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, role, subject, message } = body;

        if (!email || !message) {
            return NextResponse.json(
                { error: 'Email and message are required fields.' },
                { status: 400 }
            );
        }

        const formattedDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        const senderName = name?.trim() || 'Website Visitor';
        const inquirySubject = subject?.trim() || 'General Inquiry';
        const contactEmail = 'lexsaarthi@gmail.com';

        // 1. Direct SMTP via Nodemailer (if Gmail App Password or SMTP is configured in environment)
        const gmailUser = process.env.GMAIL_USER || process.env.SMTP_USER || contactEmail;
        const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;

        if (gmailPass) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: gmailUser,
                        pass: gmailPass
                    }
                });

                const htmlContent = `
                    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #0c0d0e; color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #D4AF37;">
                        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); padding: 25px; border-bottom: 2px solid #D4AF37; text-align: center;">
                            <h1 style="color: #D4AF37; margin: 0; font-size: 24px; letter-spacing: 1px;">LEX SAARTHI</h1>
                            <p style="color: #a0aec0; margin: 5px 0 0 0; font-size: 13px;">New Contact / Application Message</p>
                        </div>
                        <div style="padding: 30px;">
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                                <tr>
                                    <td style="padding: 10px; color: #D4AF37; font-weight: bold; width: 140px; border-bottom: 1px solid #2d3748;">Name:</td>
                                    <td style="padding: 10px; color: #ffffff; border-bottom: 1px solid #2d3748;">${senderName}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; color: #D4AF37; font-weight: bold; border-bottom: 1px solid #2d3748;">Email:</td>
                                    <td style="padding: 10px; color: #ffffff; border-bottom: 1px solid #2d3748;"><a href="mailto:${email}" style="color: #63b3ed; text-decoration: none;">${email}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; color: #D4AF37; font-weight: bold; border-bottom: 1px solid #2d3748;">Phone:</td>
                                    <td style="padding: 10px; color: #ffffff; border-bottom: 1px solid #2d3748;">${phone || 'Not provided'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; color: #D4AF37; font-weight: bold; border-bottom: 1px solid #2d3748;">Role:</td>
                                    <td style="padding: 10px; color: #ffffff; border-bottom: 1px solid #2d3748;">${role || 'Not specified'}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; color: #D4AF37; font-weight: bold; border-bottom: 1px solid #2d3748;">Subject:</td>
                                    <td style="padding: 10px; color: #ffffff; border-bottom: 1px solid #2d3748;">${inquirySubject}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; color: #D4AF37; font-weight: bold; border-bottom: 1px solid #2d3748;">Submitted At:</td>
                                    <td style="padding: 10px; color: #a0aec0; border-bottom: 1px solid #2d3748;">${formattedDate} (IST)</td>
                                </tr>
                            </table>

                            <div style="background-color: #171923; padding: 20px; border-radius: 8px; border-left: 4px solid #D4AF37;">
                                <h3 style="color: #D4AF37; margin-top: 0; margin-bottom: 10px; font-size: 15px;">Message:</h3>
                                <p style="color: #e2e8f0; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                            </div>

                            <div style="margin-top: 30px; text-align: center;">
                                <a href="mailto:${email}?subject=Re: ${encodeURIComponent(inquirySubject)}" style="background-color: #D4AF37; color: #000000; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Reply to ${senderName}</a>
                            </div>
                        </div>
                    </div>
                `;

                await transporter.sendMail({
                    from: `"Lex Saarthi Contact Form" <${gmailUser}>`,
                    to: contactEmail,
                    replyTo: email,
                    subject: `[Lex Saarthi Portal] ${inquirySubject} - ${senderName}`,
                    text: `New contact inquiry from ${senderName} (${email}):\n\nRole: ${role}\nPhone: ${phone}\nSubject: ${inquirySubject}\nTime: ${formattedDate}\n\nMessage:\n${message}`,
                    html: htmlContent
                });

                return NextResponse.json({
                    success: true,
                    delivered: true,
                    method: 'smtp',
                    message: 'Your inquiry has been successfully sent to lexsaarthi@gmail.com.'
                });
            } catch (smtpErr: any) {
                console.error('SMTP delivery failed, attempting fallback gateway:', smtpErr?.message);
            }
        }

        // 2. Gateway Dispatch via FormSubmit with dynamic Origin and dedicated token
        const incomingOrigin = req.headers.get('origin') || 'https://lex-saarthi.vercel.app';
        const incomingReferer = req.headers.get('referer') || `${incomingOrigin}/contact`;
        // Dedicated FormSubmit token for lexsaarthi@gmail.com
        const formSubmitTarget = '81add81ea524f0807f9e4913cf2852d0';

        const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${formSubmitTarget}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': incomingOrigin,
                'Referer': incomingReferer
            },
            body: JSON.stringify({
                _subject: `[Lex Saarthi Inquiry] ${inquirySubject} from ${senderName}`,
                _template: 'table',
                _captcha: 'false',
                Name: senderName,
                Email: email,
                Phone: phone || 'Not provided',
                Role: role || 'Not specified',
                Subject: inquirySubject,
                Message: message,
                Timestamp: formattedDate
            })
        });

        const data = await formSubmitResponse.json().catch(() => null);

        // Check if FormSubmit responded with an activation requirement
        const isActivationRequired =
            data?.success === 'false' &&
            typeof data?.message === 'string' &&
            data.message.toLowerCase().includes('activat');

        if (isActivationRequired) {
            return NextResponse.json({
                success: true,
                needsActivation: true,
                method: 'formsubmit',
                message: "A one-time activation email from FormSubmit has been sent to lexsaarthi@gmail.com. Please open that email and click 'Activate Form' once to enable automatic inbox delivery."
            });
        }

        if (data && (data.success === 'true' || data.success === true)) {
            return NextResponse.json({
                success: true,
                delivered: true,
                method: 'formsubmit',
                message: 'Your inquiry has been successfully transmitted to lexsaarthi@gmail.com.'
            });
        }

        if (!formSubmitResponse.ok) {
            console.error('FormSubmit gateway error:', data);
            return NextResponse.json(
                { error: data?.message || 'Failed to dispatch message via mail gateway.' },
                { status: 502 }
            );
        }

        return NextResponse.json({
            success: true,
            delivered: true,
            method: 'formsubmit',
            message: 'Your inquiry has been processed.'
        });
    } catch (error: any) {
        console.error('Contact API exception:', error);
        return NextResponse.json(
            { error: error?.message || 'Server error occurred while transmitting your message.' },
            { status: 500 }
        );
    }
}
