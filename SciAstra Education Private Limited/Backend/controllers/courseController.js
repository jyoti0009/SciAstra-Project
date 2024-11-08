

// backend/controllers/courseController.js
const Course = require('../models/Course');

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new course
exports.createCourse = async (req, res) => {
    const course = new Course(req.body);
    try {
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};