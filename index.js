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

// Export the app for Vercel to use
module.exports = app;
