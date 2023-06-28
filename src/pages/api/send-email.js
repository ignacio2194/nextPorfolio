const CircularJSON = require('circular-json');

const sendEmail = async (email, subject, message) => {
  const payload = CircularJSON.stringify({ email, subject, message });

  const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://ignaciobenitezdev.vercel.app/api/email'
    : 'http://localhost:3000/api/email';

  const response = await fetch(apiUrl, {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};

export default sendEmail;
