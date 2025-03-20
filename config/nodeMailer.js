const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "giesongacho1@gmail.com",
      pass: "chxb ldvq akle yxyz",
    },
  });
  
  module.exports = transporter