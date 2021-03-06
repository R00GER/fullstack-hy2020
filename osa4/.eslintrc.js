module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 0,
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, { args: 'none' }],
    'no-plusplus': 0,
    'no-else-return': 0,
    'global-require': 0,
  },
  plugins: ['jest'],
};
