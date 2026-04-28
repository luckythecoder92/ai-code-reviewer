const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const reviewRoutes = require('./routes/review');
app.use('/api', reviewRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

module.exports = app;
