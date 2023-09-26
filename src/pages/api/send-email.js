const CircularJSON = require("circular-json");

const sendEmail = async (email, subject, message) => {
  const payload = CircularJSON.stringify({ email, subject, message });

  // const apiUrl =
  //   process.env.NODE_ENV === "production"
  //     ? "https://ignaciobenitezdev.vercel.app/api/email"
  //     : "http://localhost:3000/api/email";

  // const {DB_USER, DB_PASSWORD} = process.env

  try {
    const response = await fetch(
      "https://ignaciobenitezdev.vercel.app/api/email",
      {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
