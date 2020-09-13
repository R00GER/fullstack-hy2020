require('dotenv').config();

const { PORT, MONGODB_URI, TEST_MONGODB_URI } = process.env;

module.exports = {
  MONGODB_URI,
  TEST_MONGODB_URI,
  PORT,
};
