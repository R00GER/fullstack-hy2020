const blogsRouter = require('express').Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Blog = require('../models/blog');
const User = require('../models/user');
const Comment = require('../models/comment');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
  res.json(blogs);
});

blogsRouter.get('/comments', async (req, res) => {
  const comments = await Comment.find({});
  console.log(comments);
  res.json(comments);
});

blogsRouter.get('/:id/comments', async (req, res) => {
  const comments = await Comment.find({ blog: req.params.id });
  res.json(comments);
});

blogsRouter.post('/:id/comments', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  const commentedBlog = await Blog.findById(id);
  const newComment = new Comment({ comment, blog: commentedBlog.id });
  newComment.save();
  res.json(newComment);
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
  const newBlog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: !body.likes ? 0 : body.likes,
    user,
  });

  const savedBlog = await newBlog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  return res.json(savedBlog);
});

blogsRouter.put('/:id', async (req, res) => {
  const blogToUpdate = req.body;
  const { id } = req.params;
  const updatedBlog = await Blog.findByIdAndUpdate(id, blogToUpdate, { new: true });
  res.json(updatedBlog);
});

blogsRouter.delete('/:id', async (req, res) => {
  const { token } = req;
  const { id } = req.params;

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }

  const blogToDelete = await Blog.findById(id);

  if (!blogToDelete) {
    return res.status(400).json({ error: 'blog not found' });
  }

  if (blogToDelete.user.toString() === decodedToken.id) {
    await Blog.findByIdAndRemove(req.params.id);
    return res.status(204).end();
  } else {
    return res.status(401).json({ error: 'not authorized to delete this post' });
  }
});

blogsRouter.post('/reset', async (req, res) => {
  await Blog.deleteMany({});
  await User.deleteMany({});

  res.status(204).end();
});

module.exports = blogsRouter;
