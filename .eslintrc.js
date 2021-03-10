const OFF = 0;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the node of JSX
    },
  },
  rules: {
    camelcase: [0],
    // A jsx extension is not required for files containing jsx
    'react/jsx-filename-extension': 0,
    // This rule struggles with flow and class properties
    'react/sort-comp': 0,
    // ignore linebreak style. the CRLF / LF endings wont matter
    // if a windows user correctly converts CRLF to LF upon commits otherwise
    // there are errors every line.
    'linebreak-style': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': ['error', { code: 200, ignoreStrings: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': OFF,
    'react/prop-types': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/ban-types': ERROR,
        '@typescript-eslint/no-var-requires': ERROR,
        '@typescript-eslint/no-inferrable-types': OFF,
        '@typescript-eslint/typedef': [
          'error',
          {
            objectDestructuring: false,
            arrowParameter: false,
            variableDeclaration: true,
            variableDeclarationIgnoreFunction: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
