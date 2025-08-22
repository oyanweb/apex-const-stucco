// app/api/contact/route.js
import { NextResponse } from 'next/server';
import Contact from '@/Models/Contact';
import connectdb from '@/lib/mongodb';
import nodemailer from "nodemailer";
 
const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',  // Replace with your actual mail server hostname
  port: 587,                    // Use 465 for SSL or 587 for TLS (STARTTLS)
  secure: false,                 // true for port 465, false for 587
  auth: {
    user: process.env.EMAIL_USER, // Your full email address (e.g., info@yourdomain.com)
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
  tls: {
    rejectUnauthorized: false, // Sometimes needed if your cert is self-signed
  },
  
  logger: true,
  debug: true,
});


export async function POST(request) {
  try {
    // Parse the form data
    const body = await request.json();
    const { name, email, message } = body;
    console.log("Contact form submission:", body);

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (!email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
    }

    // Connect to the database and save the contact information
    await connectdb();
    const newContact = await Contact.create({ name, email, message });

    // Get current date for the email
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Generate email content
    const userConfirmationEmail = generateUserConfirmationEmail(name, currentDate);
    const adminNotificationEmail = generateAdminNotificationEmail(name, email, message, currentDate);


    // Send confirmation email to the user
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email, 
        subject: "Apex Exteriors: We’ve received your message",  
        text: userConfirmationEmail.text,
        html: userConfirmationEmail.html,
      });
    } catch (err) {
      console.error("User email failed:", err);
    }

    // Send notification email to admin
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, 
        subject: `New Contact Form Submission from ${name}`, 
        text: adminNotificationEmail.text,
        html: adminNotificationEmail.html,
      });
    } catch (err) {
      console.error("Admin email failed:", err);
    }

    // Return success response
    return NextResponse.json({ 
      message: 'Thank you! Your message has been received. We\'ll get back to you shortly.',
      data: newContact 
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ 
      error: 'Failed to process your request. Please try again later.' 
    }, { status: 500 });
  }
}

// Function to generate user confirmation email
function generateUserConfirmationEmail(name, currentDate) {
  // HTML version
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We've Received Your Message</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        
        body {
          font-family: 'Poppins', Arial, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .header {
          background: linear-gradient(135deg, #FFAA17 0%, #FFAA17 100%);
          padding: 30px 20px;
          text-align: center;
          color: white;
        }
        
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .header p {
          margin: 5px 0 0;
          opacity: 0.9;
          font-weight: 300;
        }
        
        .content {
          padding: 30px 25px;
          background-color: #ffffff;
        }
        
        .greeting {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #FFAA17;
        }
        
        .message {
          margin-bottom: 25px;
        }
        
        .message-box {
          background-color: #F3F4F6;
          border-left: 4px solid #FFAA17;
          padding: 15px 20px;
          margin-bottom: 25px;
          border-radius: 4px;
        }
        
        .message-box h3 {
          margin-top: 0;
          margin-bottom: 10px;
          color: #FFAA17;
          font-size: 18px;
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #FFAA17 0%, #FFAA17 100%);
          color: white;
          text-decoration: none;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          margin: 15px 0;
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(37,99,235,0.25);
        }
        
        .social-links {
          text-align: center;
          padding: 15px 0;
          background-color: #F9FAFB;
          border-top: 1px solid #E5E7EB;
        }
        
        .social-icon {
          display: inline-block;
          margin: 0 10px;
          color: #6B7280;
          font-size: 18px;
          text-decoration: none;
        }
        
        .footer {
          text-align: center;
          padding: 20px;
          color: #6B7280;
          font-size: 14px;
        }
        
        .footer a {
          color: #FFAA17;
          text-decoration: none;
        }
        
        @media screen and (max-width: 550px) {
          .header {
            padding: 20px 15px;
          }
          .header h1 {
            font-size: 24px;
          }
          .content {
            padding: 20px 15px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>We've Received Your Message</h1>
          <p>${currentDate}</p>
        </div>
        
        <div class="content">
          <div class="greeting">Hello ${name},</div>
          
          <div class="message">
            <p>Thank you for contacting us. We've received your message and we appreciate you taking the time to reach out.</p>
            <p>Our team will review your inquiry and get back to you as soon as possible. We typically respond within 24-48 business hours.</p>
          </div>
          
          <div class="message-box">
            <h3>📝 Your Inquiry Details</h3> 
            <p><strong>Date Submitted:</strong> ${currentDate}</p>
            <p>We've saved a copy of your message and it's been assigned to the appropriate team member.</p>
          </div> 
          <div style="margin-top: 30px;">
            <p>If you have any additional information to add to your inquiry, feel free to reply to this email.</p>
            <p>Warm regards,<br><strong>Customer Support Team</strong></p>
          </div>
        </div>
         
        <div class="footer">
          <p>© 2025 Apex Exteriors. All rights reserved.</p> 
        </div>
      </div>
    </body>
    </html>
  `;

  // Plain text version
  const text = `
    We've Received Your Message
    ${currentDate}
    
    Hello ${name},
    
    Thank you for contacting us. We've received your message and we appreciate you taking the time to reach out.
    
    Our team will review your inquiry and get back to you as soon as possible. We typically respond within 24-48 business hours.
    
    YOUR INQUIRY DETAILS: 
    Date Submitted: ${currentDate}
    
    We've saved a copy of your message and it's been assigned to the appropriate team member.
    
    If you have any additional information to add to your inquiry, feel free to reply to this email.
    
    Warm regards,
    Customer Support Team
    
    © 2025 Apex Exteriors. All rights reserved.
    Privacy Policy | Terms of Service | Contact Us
  `;

  return { html, text };
}

// Function to generate admin notification email
function generateAdminNotificationEmail(name, email, message, currentDate) {
  // HTML version
  const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: 'Poppins', sans-serif; background: #f4f6f8; margin: 0; padding: 0; color: #111827;">

  <div style="max-width: 640px; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
    
    <div>
      <h1 style="margin: 0; font-size: 34px; font-weight: 700;">New Contact Form Submission</h1>
      <p style="margin-top: 5px; font-size: 24px; opacity: 0.85; ">${currentDate}</p>
    </div>
    
    <div>
      
      <div style="margin-bottom: 20px;margin-top: 20px;">
        <span style="display: inline-block; background-color: #fee2e2; color: #b91c1c; padding: 5px 12px; border-radius: 999px; font-size: 20px; font-weight: 600; text-transform: uppercase;">Action Required: New Contact Form Submission</span>
      </div>

      <div style="margin-bottom: 25px;">
        <p>A new contact form has been submitted on your website. Please review the details below and respond as appropriate.</p>
      </div>
      
      <div style="background-color: #f9fafb; border-left: 4px solid #4f46e5; padding: 16px 20px; margin-bottom: 25px; border-radius: 6px;">
        <h3 style="margin-top: 0; color: #4f46e5; font-size: 16px;">Contact Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
        <p><strong>Date Submitted:</strong> ${currentDate}</p>
      </div>
      
      <h3 style="color: #4f46e5; font-size: 26px;">📝 Message Content:</h3>
      <div style="white-space: pre-line; line-height: 1.6; font-size: 30px; color: #374151;  padding-left: 10px; padding-right: 10px;">
        ${message}
      </div>
      
      <div style="text-align: center; margin-top: 25px;">
        <a href="mailto:${email}?subject=RE: Your Contact Form Submission" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #4f46e5); color: white; text-decoration: none; padding: 12px 26px; border-radius: 50px; font-weight: 600; font-size: 24px; transition: all 0.3s ease; margin-bottom: 15px;">
        Reply to ${name}
        </a>
      </div>

    </div>
    
    <div style="font-size: 13px; color: #6b7280; text-align: center; padding: 20px; background-color: #f3f4f6;">
      <p>This is an automated notification from your website's contact form system.</p>
      <p>© 2025 Apex. All rights reserved.</p>
    </div>

  </div>
  
</body>
</html>

  `;

  // Plain text version
  const text = `
    NEW CONTACT FORM SUBMISSION
    ${currentDate}
    
    Action Required: New Contact Form Submission
    
    A new contact form has been submitted on your website. Please review the details below and respond as appropriate.
    
    CONTACT INFORMATION:
    Name: ${name}
    Email: ${email} 
    Date Submitted: ${currentDate}
    
    MESSAGE CONTENT:
    ${message}
    
    To reply directly to this user, please email them at: ${email}
    
    This is an automated notification from your website's contact form system.
    © 2025 Apex Exteriors. All rights reserved.
  `;

  return { html, text };
}