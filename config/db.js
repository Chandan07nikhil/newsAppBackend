const mongoose = require('mongoose');

const uri = "mongodb+srv://9891cky:47Aze6miycofAWzM@cluster0.rukyp.mongodb.net/yourDatabaseName?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
