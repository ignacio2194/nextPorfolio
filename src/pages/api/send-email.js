const CircularJSON = require('circular-json');

const sendEmail = async (email, subject, message) => {
  const payload = CircularJSON.stringify({ email, subject, message });

  const response = await fetch('https://ignaciobenitezdev.vercel.app/api/email', {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};

export default sendEmail;