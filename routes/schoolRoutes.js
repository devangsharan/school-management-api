const express = require("express");
const { addSchool, listSchools } = require("../controllers/schoolController");

const router = express.Router();

// Route to add a school
router.post("/schools", addSchool);

// Route to list all schools
router.get("/schools", listSchools);

module.exports = router;
