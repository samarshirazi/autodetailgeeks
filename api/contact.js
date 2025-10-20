// Vercel serverless function for handling contact form submissions
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, carType, service, date, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !service) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Option A: Send email using Nodemailer + Gmail SMTP
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    const emailContent = `
      New booking request from AutoDetailGeeks website:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Vehicle: ${carType || 'Not specified'}
      Service: ${service}
      Preferred Date: ${date || 'Not specified'}
      
      Message:
      ${message || 'No additional message'}
      
      ---
      Sent from AutoDetailGeeks Contact Form
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'info@autodetailgeeks.com', // Your business email
      subject: `New Booking Request - ${service}`,
      text: emailContent,
      replyTo: email,
    });

    // Optional: Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for your booking request - AutoDetailGeeks',
      text: `
        Hi ${name},
        
        Thank you for your booking request! We've received your inquiry for ${service} and will contact you within 24 hours to confirm your appointment.
        
        Service Details:
        - Service: ${service}
        - Vehicle: ${carType || 'Not specified'}
        - Preferred Date: ${date || 'Flexible'}
        
        If you need immediate assistance, please call us at +1 431 374 6004.
        
        Best regards,
        AutoDetailGeeks Team
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
    
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
