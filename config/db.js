require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MongoDB URI is not defined");
}

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
