const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "your-smtp-server",
    port: 587,
    secure: false,
    auth: {
      user: "smtp-user",
      pass: "smtp-password"
    }
  });


  let info = await transporter.sendMail({
    from: "foo@example.com",
    to: "bar@example.com, baz@example.com",
    subject: "Hello",
    text: "Hello world",
  });