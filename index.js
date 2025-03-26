const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const schoolRoutes = require('./routes/schoolRoutes'); // Import the routes

dotenv.config();
const app = express();


// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Use routes defined in schoolRoutes.js for handling API requests
app.use('/api', schoolRoutes);

// Start server on port 5000 or from environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
