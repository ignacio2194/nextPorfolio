const CircularJSON = require('circular-json');
import {useState} from 'react';
const sendEmail = async (email, subject, message) => {
  const payload = CircularJSON.stringify({ email, subject, message });
  const response = await fetch('http://localhost:3000/api/email', {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
};

export default sendEmail;