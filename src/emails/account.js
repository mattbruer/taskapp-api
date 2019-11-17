const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (name, email) => {
  sgMail.send({
    to: email,
    from: "mbruer@gmail.com",
    subject: "Thanks for signing up for Task App",
    text: `now give me your money, ${name}`
  });
};

const sendCancellationEmail = (name, email) => {
  sgMail.send({
    to: email,
    from: "mbruer@gmail.com",
    subject: "Thanks for leaving up for Task App",
    text: `At least I got your money, ${name}`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};
