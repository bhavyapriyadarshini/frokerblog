const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Routes
router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);

module.exports = router;
