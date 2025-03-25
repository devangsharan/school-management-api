const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const schoolRoutes = require('./routes/schoolRoutes');


dotenv.config();
const app = express();

app.post("/addSchool", (req, res) => {
    res.status(200).json({ message: "School added successfully!" });
});

app.get("/listSchools", async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        
        if (!latitude || !longitude) {
            return res.status(400).json({ error: "Latitude and longitude are required" });
        }

        const schools = await School.findAll(); 

        res.json(schools);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.use(express.json());
app.use(cors());
app.use('/api', schoolRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
