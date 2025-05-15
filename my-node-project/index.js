// index.js
const mongoose = require('mongoose');
const app = require('./src/framework/express/app.js');

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/rentals';

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('✅ Kết nối MongoDB thành công');
    app.listen(PORT, () => {
      console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Lỗi kết nối MongoDB:', err);
  });
