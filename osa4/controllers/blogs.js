const blogsRouter = require('express').Router();
const mongoose = require('mongoose');
const Blog = require('../models/blog');

mongoose.set('useFindAndModify', false);

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

blogsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const foundedBlog = await Blog.findById(id);
  res.json(foundedBlog);
});

blogsRouter.post('/', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes === '' ? 0 : req.body.likes,
  });

  const savedBlog = await blog.save();
  res.json(savedBlog);
});

blogsRouter.put('/:id', async (req, res) => {
  const foundedBlog = await Blog.findById(req.params.id);
  const updatedLikes = { ...foundedBlog._doc, likes: req.body.likes };
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedLikes, { new: true });
  res.json(updatedBlog);
});

blogsRouter.delete('/:id', async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.status(204).end();
});

module.exports = blogsRouter;
