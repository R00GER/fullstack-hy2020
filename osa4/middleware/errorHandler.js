const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  }

  if (error.name === 'ValidationError') {
    return response.status(400).json({
      validationError: 'Strings: title, author, url. Numbers: likes. Required: title, url',
    });
  }

  return next(error);
};

module.exports = {
  errorHandler,
  unknownEndpoint,
};
