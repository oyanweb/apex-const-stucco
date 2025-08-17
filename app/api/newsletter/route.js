import nodemailer from "nodemailer";
import fs from 'fs';
import path from 'path'; 


const pdfPath = path.join(process.cwd(), 'public', 'audit', 'strategy-audit.pdf');
const pdfBuffer = fs.readFileSync(pdfPath);


export async function POST(request) {
  try {

    const { email, firstName = "Subscriber" } = await request.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ message: "Invalid email address" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

     // Get current date for the email
    const currentDate = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });

    // Enhanced HTML email template with modern design
    const htmlEmail = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Our Newsletter</title>
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
          background: #8B2E2E; 
          text-align: center;
          color: white;
          padding-top: 20px;
          padding-bottom: 20px;
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
        }
        
        .message {
          margin-bottom: 25px;
        }
        
        .tip-box {
          background-color: #F3F4F6;
          border-left: 4px solid #8B2E2E;
          padding: 15px 20px;
          margin-bottom: 25px;
          border-radius: 4px;
        } 

        .tip-box h3 {
          margin-top: 0;
          margin-bottom: 10px;
          color: #8B2E2E;
          font-size: 18px;
        }
        
        .cta-button {
          display: inline-block;
          background: #8B2E2E;
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
          box-shadow: 0 4px 8px rgba(99,102,241,0.25);
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
          color: #8B2E2E;
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
          <h1>Welcome to Our Community! </h1> 
        </div>
        
        <div class="content">
          <h1 class="greeting">Hi ${firstName},</h1>

          <h1>Strategy Audit PDF Is Attached Down There!</h1>

          
          <div class="message">
            <p>Thank you for requesting your free SEO Audit Strategy! We're excited to help you improve your website’s performance and search visibility.</p>
          </div> 


          <div style="margin-top: 30px;">
            <p>Warm regards,<br><strong>Oyan Web Team</strong></p>
          </div>
        </div>
        
        <div class="social-links">
          <a href="#" class="social-icon">📱</a>
          <a href="#" class="social-icon">📘</a>
          <a href="#" class="social-icon">📸</a>
          <a href="#" class="social-icon">🐦</a>
        </div>
        
        <div class="footer">
          <p>© 2025 Oyan Web. All rights reserved.</p> 
        </div>
      </div>
    </body>
    </html>
  `;

    // Plain text alternative for email clients that don't support HTML
    const textEmail = `
      Welcome to Our Community!
      ${currentDate}
      
      Hello ${firstName},
      
      Thank you for joining our newsletter! We're thrilled to have you as part of our growing community of passionate professionals.
      
      We'll be sending you weekly insights, tips, and exclusive content to help you grow and succeed.
      
      PRO TIP OF THE WEEK:
      Keep your website updated with fresh content and regular maintenance for better performance and higher search rankings. A well-maintained site builds trust with your visitors!
      
      If you have any questions or specific topics you'd like us to cover, feel free to reply to this email.
      
      Warm regards,
      Oyan Web Team
      
      © 2025 Oyan Web. All rights reserved.
      To unsubscribe or update your preferences, click here.
    `;


    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Free SEO Audit PDF 📊",
      text: textEmail,
      html: htmlEmail,
      attachments: [
        {
          filename: "SEO-Audit.pdf",
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });
    

    return new Response(
      JSON.stringify({ message: "Welcome email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
  


}