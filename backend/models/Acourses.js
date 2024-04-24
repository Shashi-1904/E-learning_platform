const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  pricing: { type: String, required: true },
  picture: { type: String },
  teacher: { type: String, required: true },
  videoLinks: [{ type: String }] // Array to store video links
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
