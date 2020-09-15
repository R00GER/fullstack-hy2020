const blogsRouter = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// const { getTokenFrom } = require('../utils/middleware');
const Blog = require('../models/blog');
const User = require('../models/user');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
  res.json(blogs);
});

blogsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  const foundedBlog = await Blog.findById(id);
  res.json(foundedBlog);
});

blogsRouter.post('/', async (req, res) => {
  const { body, token } = req;

  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }
  const user = await User.findById(decodedToken.id);
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes === '' ? 0 : body.likes,
    user: user._id,
  });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  return res.json(savedBlog);
});

blogsRouter.put('/:id', async (req, res) => {
  const foundedBlog = await Blog.findById(req.params.id);
  const updatedLikes = { ...foundedBlog._doc, likes: req.body.likes };
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedLikes, { new: true });
  res.json(updatedBlog);
});

blogsRouter.delete('/:id', async (req, res) => {
  const { token } = req;
  const { id } = req.params;

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(400).json({ error: 'blog not found' });
  }

  if (blog.user.toString() === decodedToken.id) {
    await Blog.findByIdAndRemove(req.params.id);
    return res.status(204).end();
  } else {
    return res.status(401).json({ error: 'not authorized to delete this post' });
  }
});

module.exports = blogsRouter;
