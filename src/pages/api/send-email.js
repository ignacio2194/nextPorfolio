const CircularJSON = require('circular-json');
const https = require('https');

const sendEmail = async (email, subject, message) => {
  const payload = CircularJSON.stringify({ email, subject, message });

  const options = {
    hostname: 'ignaciobenitezdev.vercel.app',
    port: 443,
    path: '/api/email',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': payload.length
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.on('data', (data) => {
        resolve(data);
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(payload);
    req.end();
  });
};

export default sendEmail;
