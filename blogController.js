const BlogPost = require('../models/BlogPost');

// Controller methods
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogPost.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createBlog = async (req, res) => {
    const blog = new BlogPost(req.body);
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Other CRUD methods (update, delete) and pagination logic can be added similarly

module.exports = {
    getAllBlogs,
    createBlog,
    // other controller methods
};
