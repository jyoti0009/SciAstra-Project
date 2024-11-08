// backend/routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/', blogController.getBlogPosts);
router.post('/', blogController.createBlogPost);

module.exports = router;

