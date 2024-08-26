module.exports = {
  env: {
    browser: true,
    'shared-node-browser': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended-legacy',
    'plugin:unicorn/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    '@stylistic',
    'eslint-comments',
    'import',
    'promise',
    'security',
    'unicorn',
    'jsx-a11y'
  ],
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'handle-callback-err': ['error', '^(err|error)$'],
    'max-classes-per-file': 'off',
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
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/return-await': 'off',

    'react/no-unknown-property': 'error',
    'react/self-closing-comp': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': ['error', {
      unnamedComponents: 'arrow-function'
    }],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-this-in-sfc': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'eslint-comments/disable-enable-pair': 'off',

    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'import/no-default-export': 'off',
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
    } ],

    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-regexp': 'off',
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
    'unicorn/prevent-abbreviations': 'off',

    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  ignorePatterns: ['node_modules']
}