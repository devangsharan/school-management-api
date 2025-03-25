const pool = require('../db');

// Add School API
exports.addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;
        
        // Input Validation
        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ error: "All fields (name, address, latitude, longitude) are required." });
        }

        const query = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
        await pool.query(query, [name, address, latitude, longitude]);

        res.status(201).json({ message: "School added successfully" });
    } catch (error) {
        console.error("Error in addSchool:", error.message);
        res.status(500).json({ error: "Database error while adding school" });
    }
};

// List Schools API sorted by proximity
exports.listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        // Input Validation
        if (!latitude || !longitude) {
            return res.status(400).json({ error: "Latitude and longitude are required in query parameters." });
        }

        const query = "SELECT id, name, address, latitude, longitude FROM schools";
        const [schools] = await pool.query(query);

        // Function to calculate distance using Haversine formula
        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const toRadians = (degree) => (degree * Math.PI) / 180;
            const R = 6371; // Radius of Earth in km

            const dLat = toRadians(lat2 - lat1);
            const dLon = toRadians(lon2 - lon1);

            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);

            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c; // Distance in km
        };

        // Sort schools by proximity
        const sortedSchools = schools.map(school => ({
            ...school,
            distance: calculateDistance(parseFloat(latitude), parseFloat(longitude), school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.status(200).json(sortedSchools);
    } catch (error) {
        console.error("Error in listSchools:", error.message);
        res.status(500).json({ error: "Database error while fetching schools" });
    }
};
