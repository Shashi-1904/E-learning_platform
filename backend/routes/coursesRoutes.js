const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.post('/add', courseController.addCourse);
router.get('/showcourses', courseController.getAllCourses);
router.get('/showcourses2', courseController.getAllCourses2);
router.get('/:courseName', courseController.getCourseDetails);

module.exports = router;
