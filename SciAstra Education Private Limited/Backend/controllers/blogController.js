

// backend/controllers/blogController.js
const BlogPost = require('../models/BlogPost');

// Get all blog posts
exports.getBlogPosts = async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new blog post
exports.createBlogPost = async (req, res) => {
    const blogPost = new BlogPost(req.body);
    try {
        const savedPost = await blogPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};