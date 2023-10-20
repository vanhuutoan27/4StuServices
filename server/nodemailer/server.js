const express = require('express');
const cors = require('cors');

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // Chọn cổng mà bạn muốn sử dụng.

const corsOptions = {
  origin: 'http://localhost:3000', // Địa chỉ trang web của bạn
};

app.use(cors(corsOptions));

app.use(cors());

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Hoặc sử dụng host và cổng của SMTP bạn muốn.
    auth: {
      user: '4stu.contact@gmail.com',
      pass: 'nogr vkii lwgy ytcx',
    },
  });

  const mailOptions = {
    from: '4stu.contact@gmail.com',
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
