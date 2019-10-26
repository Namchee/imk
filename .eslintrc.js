module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'parser': 'babel-eslint',
  },
  'plugins': [
    'babel',
    'vue',
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'warn',
      'windows',
    ],
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ]
  },
};
