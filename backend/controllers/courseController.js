
const Course = require('../models/Acourses');

exports.addCourse = async (req, res) => {
  try {
    const { courseName, description, duration, pricing, picture, teacher } = req.body;
    const course = new Course({ courseName, description, duration, pricing, picture, teacher });
    await course.save();
    res.status(201).json({ message: 'Course added successfully', course });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add course', error: error.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    // Fetch all courses from the database
    const courses = await Course.find().limit(3); // Fetch only the first three courses
    res.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getAllCourses2 = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses', error: error.message });
  }
};

exports.getCourseDetails = async (req, res) => {
  try {
    const courseName = req.params.courseName;
    const course = await Course.findOne({ courseName });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch course details', error: error.message });
  }
};