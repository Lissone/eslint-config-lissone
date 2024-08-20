module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'standard', 
    'plugin:@typescript-eslint/recommended', 
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        printWidth: 90
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}