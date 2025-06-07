require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const path = require("path");

const app = express();
const PORT = 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.json());

// Serve assets folder (CSS, images, etc)
app.use(express.static(path.join(__dirname, '../assets')));

// Serve root folder for HTML files (index.html, contact.html, etc)
app.use(express.static(path.join(__dirname, '..')));

// Your POST contact route
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
  }
  const msg = {
    to: 'staycreative71@gmail.com',
    from: process.env.SENDGRID_SENDER_EMAIL,
    replyTo: email,
    subject: subject || 'New Contact Form Message',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };
  try {
    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('SendGrid Error:', error.response?.body || error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

// 404 handler
app.use((req, res) => {
  const filePath = path.join(__dirname, '404.html');
  console.log('Sending 404 from:', filePath);
  res.status(404).sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
