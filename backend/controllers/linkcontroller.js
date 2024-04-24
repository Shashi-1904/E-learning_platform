const Course = require('../models/Acourses');

exports.addVideoLink = async (req, res) => {
  const { courseName, videoLink } = req.body;
  try {
    const course = await Course.findOneAndUpdate(
      { courseName },
      { $push: { videoLinks: videoLink } },
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    return res.status(200).json({ message: 'Video link added successfully', course });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to add video link', error: error.message });
  }
};
