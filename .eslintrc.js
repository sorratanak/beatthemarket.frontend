module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'react/sort-comp': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'import/no-cycle': 2,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 2,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unescaped-entities': 0,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    React: 'writable',
  },
};
