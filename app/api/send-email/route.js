import nodemailer from 'nodemailer';

export async function POST(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    // Parse request body
    const { name, email, subject, message } = await req.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or any SMTP server
      auth: {
        user: 'joshichetan014@gmail.com',
        pass: 'wodu olni gnpf qxch',
      },
    });
  
    const mailOptions = {
      from: '"Query Bot" joshichetan014@gmail.com',
      to: 'joshi.chetan.work@gmail.com',
      subject: `Query By ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!', info }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email.', details: error.message }),
      { status: 500 }
    );
  }
}

