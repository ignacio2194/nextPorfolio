// import { NextApiHandler } from 'next';
import nodemailer from 'nodemailer';

const sendEmail= async (req, res) => {

  const { name, email, message } = req.body;

  const contentHTML = `
    <h1> User Information:${name}</h1>
    <ul>
      <li> User email:${email}</li>
    </ul>
    <p>User message:${message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'ignaciobeniteznacho@outlook.com',
        pass: 'Skateisnotcrime94'
    },
  });

  try {
    const info = await transporter.sendMail({
      from: 'ignaciobeniteznacho@outlook.com',
      to: 'ignaciobeniteznacho@outlook.com',
      subject: email,
      text: message,
      html: contentHTML,
    });


    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

export default sendEmail;
