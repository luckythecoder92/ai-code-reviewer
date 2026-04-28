const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const frontendUrl = process.env.FRONTEND_URL;

// Middleware
app.use(cors({
  origin(origin, callback) {
    // Allow same-origin/non-browser requests and configured frontend deployments.
    if (!origin) {
      return callback(null, true);
    }

    if (!frontendUrl || origin === frontendUrl) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  }
}));
app.use(express.json());

// Routes
const reviewRoutes = require('./routes/review');
app.use('/api', reviewRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

module.exports = app;
