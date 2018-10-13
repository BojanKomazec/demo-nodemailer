var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sender@example.com',
    pass: '*************'
  }
});

var mailOptions = {
  from: 'sender@example.com',
  to: 'receiver@example.com',
  subject: 'Nodemailer test',
  text: 'Hello!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});