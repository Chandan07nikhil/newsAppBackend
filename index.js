const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Vercel does not require app.listen(PORT), it uses the provided PORT environment variable
const PORT = process.env.PORT || 5000; // Default to 5000 if Vercel doesn't provide a PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
