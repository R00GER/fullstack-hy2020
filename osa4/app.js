const express = require('express');
require('express-async-errors');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const { info, error } = require('./utils/logger');
const blogsRouter = require('./controllers/blogs');
const { unknownEndpoint, errorHandler } = require('./middleware/errorHandler');

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

app.use('/api/blogs', blogsRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
