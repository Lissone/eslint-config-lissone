module.exports = {
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended-legacy',
    'plugin:unicorn/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    '@stylistic',
    'eslint-comments',
    'import',
    'promise',
    'security',
    'unicorn'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'handle-callback-err': ['error', '^(err|error)$'],
    'max-classes-per-file': 'off',
    'no-console': ['error', { allow: ['error'] }],
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'no-use-before-define': 'off',
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      allowSeparatedGroups: true
    }],

    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE']
    }],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'off',

    'eslint-comments/disable-enable-pair': 'off',

    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
      alphabetize: { order: 'asc', caseInsensitive: false },
      distinctGroup: true,
      'newlines-between': 'always',
      warnOnUnassignedImports: false,
      pathGroups: [{ pattern: '~*/**', group: 'internal', position: 'after' }],
      pathGroupsExcludedImportTypes: ['builtin']
    }],

    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-object-injection': 'off',

    'unicorn/catch-error-name': ['error', { name: 'err' }],
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/filename-case': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-array-method-this-argument': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'off'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  ignorePatterns: ['node_modules']
}