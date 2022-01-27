const express = require('express');
const path = require('path');
const app = express();
const nodemailer = require("nodemailer");
const email = process.env.email;
const password = process.env.password;

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password
  },
});

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post("/form", (req, res) => {
  res.json({ requestBody: req.body });
  let email = req.body;

  transporter.sendMail({
    from: `"Gabriels Email Relay" <${email}>`, // sender address
    to: "gabe@fordltc.net", // list of receivers
    subject: email.subject, // Subject line
    html: `<h1>Hey Gabriel my name is ${email.name},<br/></h1><b>${email.message}</b>`, // html body
  });

})

app.listen(process.env.PORT || 3000);