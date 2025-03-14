const cors = require('cors');

// Initialize CORS middleware
const corsMiddleware = cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
});

// Serverless function handler for Vercel
module.exports = (req, res) => {
  // Apply CORS middleware
  corsMiddleware(req, res, () => {
    // Send the response
    res.status(200).json({ message: 'Server is alive!' });
  });
};