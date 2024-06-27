const express = require('express');
const router = express.Router();
const Blog = require('../models/BlogPost');

// Create a new blog post
router.post('/blogs', async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error('Failed to create blog:', err);
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

// Get all blog posts
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    console.error('Failed to fetch blogs:', err);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Get a specific blog post by ID
router.get('/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (err) {
    console.error('Failed to fetch blog:', err);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// Update a blog post by ID
router.put('/blogs/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    console.error('Failed to update blog:', err);
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

// Delete a blog post by ID
router.delete('/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(204).end();
  } catch (err) {
    console.error('Failed to delete blog:', err);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

module.exports = router;
