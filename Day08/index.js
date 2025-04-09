const express = require('express');
const app = express();
const port = 3000;

// Import routes
const studentRouter = require('./studentroute');

// Use middleware to parse JSON data
app.use(express.json());

// Use the student routes with '/students' prefix
app.use('/students', studentRouter);

// Set up the server to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
