const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { MONGODB_URI, PORT } = require('./utils/config');
const blogsRouter = require('./controllers/blogs');
const { info, error } = require('./utils/logger');
const { requestLogger, unknownEndpoint, errorHandler } = require('./utils/middleware');

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    info('Connected to database');
  })
  .catch((err) => {
    error(err);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(requestLogger);

app.use('/api/blogs', blogsRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
