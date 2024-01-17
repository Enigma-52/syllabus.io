const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Courses data (move this to a separate file if needed)
const coursesData = require('./courses.js');

app.get("/", (req, res) => {
    res.sendFile('public/courses.html' , { root : __dirname});
  });
  
  app.get("/api/courses", (req, res) => {
    res.json(coursesData);
  });


  app.get('/courses/:coursecode', (req, res) => {
    res.sendFile(__dirname + '/public/course-details.html');
  });
  


  // API endpoint to get course details
  app.get('/api/courses/:coursecode', (req, res) => {
    const courseCode = req.params.coursecode;
    const course = coursesData.find(course => course.coursecode === courseCode);
  
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  });
  
  app.use(express.static('public'));
  
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });