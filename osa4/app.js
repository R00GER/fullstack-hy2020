const express = require('express');
require('express-async-errors');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const { info, error } = require('./utils/logger');
const blogsRouter = require('./controllers/blogs');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const { unknownEndpoint, errorHandler, getTokenFrom } = require('./utils/middleware');
// const getTokenFrom = require('./utils/getToken');

const app = express();
const { MONGODB_URI, TEST_MONGODB_URI } = config;

let url = MONGODB_URI;

if (process.env.NODE_ENV === 'test') {
  url = TEST_MONGODB_URI;
}

info(`Enviroment: ${process.env.NODE_ENV}`);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    info('Connected to database');
  })
  .catch((err) => {
    error(err);
  });

app.use(cors());
app.use(express.json());

app.use(getTokenFrom);
app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/blogs', blogsRouter);

if (process.env.NODE_ENV === 'test') {
  const testRouter = require('./controllers/tests');
  app.use('/api/testing', testRouter);
}

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
