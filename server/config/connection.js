require('dotenv').config;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ptg', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then (() => console.log("DB Connected"))
.catch ((e) => console.log("DB Error: ", e));

module.exports = mongoose.connection;