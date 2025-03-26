const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes"); // Import the routes

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS

// Default route to check if API is running
app.get("/", (req, res) => {
    res.send("School Management API is running...");
});

// Use routes defined in schoolRoutes.js for handling API requests
app.use("/api", schoolRoutes);

// Handle 404 errors for unknown routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start server on Render-assigned port or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
