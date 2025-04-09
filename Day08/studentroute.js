const express = require('express');
const router = express.Router();
const studentService = require('./studentservice');

// Get all students
router.get('/', (req, res) => {
    try {
        const results = studentService.getAllStudents();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get student by ID
router.get('/:id', (req, res) => {
    try {
        const id = req.params.id;
        const student = studentService.getStudentById(id);

        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ error: "Student not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get students by gender (m/f)
router.get('/gender/:gen', (req, res) => {
    try {
        const genderParam = req.params.gen.toLowerCase();
        const gender = genderParam === 'm' ? 'male' : 'female';
        const results = studentService.getStudentsByGender(gender);

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).json({ error: "No students found with this gender" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Get students by course name
router.get('/course/:name', (req, res) => {
    try {
        const courseName = req.params.name;
        const results = studentService.getStudentsByCourse(courseName);

        if (results.length > 0) {
            res.status(200).json(results);
        } else {
            res.status(404).json({ error: "No students found for this course" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;