// src/framework/express/app.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Express đã tích hợp sẵn body-parser, nên ta dùng app.use(express.json()) thay vì import body-parser
app.use(express.json());

// Route mẫu
app.get('/', (req, res) => {
  res.send('🏠 Chào mừng đến với hệ thống tìm phòng trọ!');
});

module.exports = app;
