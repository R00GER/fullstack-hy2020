const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogs', { title: 1, url: 1 });
  res.json(users);
});

usersRouter.post('/', async (req, res) => {
  const { body } = req;
  const { username, name } = body;

  if (body.passwordHash.length < 3) {
    return res.status(400).json({ validationError: 'password minlength: 3' });
  }

  const passwordHash = await bcrypt.hash(body.passwordHash, 10);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();
  return res.json(savedUser);
});

module.exports = usersRouter;
