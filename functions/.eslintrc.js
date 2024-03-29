module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  rules: {
    'max-len': ['error', 120],
  },
  parserOptions: {
    'ecmaVersion': 2020,
  },
};
