import nodemailer from "nodemailer";

async function receiveUserContact(req, res, next) {
  console.log(req.body);
  let sender = "Unknown";
  if (req.body.firstName || req.body.lastName) {
    sender = `${req.body.firstName} ${req.body.lastName}`;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_SENDER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: req.body.email,
    subject: `yogaonpurpose.net message from ${sender}`,
    text: req.body.message,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ error });
    } else {
      res.sendStatus(200);
      console.log(`Email sent: ${info.response}`);
    }
  });
}

export default { receiveUserContact };
