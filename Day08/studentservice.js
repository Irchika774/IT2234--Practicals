const db = require('./studentdb');
const students = db.students;

function getAllStudents() {
    return students;
}

function getStudentById(id) {
    if (!id) return null; // Validate input
    return students.find(student => student.regno === id);
}

function getStudentsByGender(gender) {
    if (!gender) return []; // Validate input
    const normalizedGender = gender.toLowerCase();
    return students.filter(student => 
        student.gender.toLowerCase() === normalizedGender
    );
}

function getStudentsByCourse(course) {
    if (!course) return []; // Validate input
    const normalizedCourse = course.toLowerCase();
    return students.filter(student => 
        student.course.toLowerCase() === normalizedCourse
    );
}

module.exports = {
    getAllStudents,
    getStudentById,
    getStudentsByGender,
    getStudentsByCourse
};