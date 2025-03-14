const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());

// API Routes
app.get('/api/ping', (req, res) => {
  res.status(200).json({ message: 'Server is alive!' });
});

// Handle root API request for Vercel health checks
app.get('/api', (req, res) => {
  res.status(200).json({ status: 'API is running' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5300;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export the Express API for Vercel
module.exports = app;
