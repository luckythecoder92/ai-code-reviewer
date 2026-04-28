const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Route to review code
router.post('/review', reviewController.reviewCode);

module.exports = router;
