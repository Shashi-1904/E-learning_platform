const express = require('express');
const router = express.Router();
const courseController = require('../controllers/linkcontroller');

router.post('/add-video-link', courseController.addVideoLink);

module.exports = router;
