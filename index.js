const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { School } = require('./models'); // ✅ Import your Sequelize model
const schoolRoutes = require('./routes/schoolRoutes');
dotenv.config();
const app = express();

// ✅ Middleware should be placed BEFORE routes
app.use(express.json());
app.use(cors());

// ✅ Default route to prevent "Cannot GET /"
app.get("/", (req, res) => {
    res.send("School Management API is running!");
});

// ✅ Use separate route files for better structure
app.use('/api', schoolRoutes);

// ✅ Fix "/listSchools" to properly fetch from DB
app.get("/api/listSchools", async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        
        if (!latitude || !longitude) {
            return res.status(400).json({ error: "Latitude and longitude are required" });
        }

        // Fetch all schools from the database
        const schools = await School.findAll(); 

        res.json(schools);
    } catch (error) {
        console.error("Error fetching schools:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
