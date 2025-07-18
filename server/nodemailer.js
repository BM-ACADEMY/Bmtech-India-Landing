const nodemailer = require('nodemailer');

const sendMail = async ({ name, email, number, city, selectedPlans }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const plansList = selectedPlans?.join(", ") || "No plans selected";

  const ownerMailOptions = {
    from: `"Ind Bmtechx" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "📬 New Lead Form Submission",
    html: `
      <h2>New Lead Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${number}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Plans Chosen:</strong> ${plansList}</p>
    `,
  };

  const userMailOptions = {
    from: `"Ind Bmtechx" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "✅ Thank You for Your Enquiry!",
    html: `
      <div>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in our services. We have received your request and will get back to you within 15 minutes.</p>
        <p>Selected Plan(s): ${plansList}</p>
        <p>Regards,<br/>Team BMTechX</p>
      </div>
    `,
  };

  await transporter.sendMail(ownerMailOptions);
  await transporter.sendMail(userMailOptions);
};

module.exports = sendMail;
