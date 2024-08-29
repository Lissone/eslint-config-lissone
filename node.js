module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
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
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
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

    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/array-bracket-newline': ['error', 'consistent'],
    '@stylistic/array-element-newline': 'off',
    '@stylistic/arrow-parens': 'error',
    '@stylistic/arrow-spacing': 'error',
    '@stylistic/block-spacing': 'error',
    '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],
    '@stylistic/computed-property-spacing': ['error', 'never'],
    '@stylistic/dot-location': ['error', 'property'],
    '@stylistic/eol-last': 'error',
    '@stylistic/function-call-argument-newline': 'off',
    '@stylistic/function-call-spacing': ['error', 'never'],
    '@stylistic/function-paren-newline': ['error', 'consistent'],
    '@stylistic/generator-star-spacing': ['error', { before: true, after: false }],
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
    '@stylistic/indent': ['error', 2, {
      SwitchCase: 1,
      ignoredNodes: [
        'FunctionExpression > .params[decorators.length > 0]',
        'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
        'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
      ]
    }],
    '@stylistic/key-spacing': ['error', {
      beforeColon: false, afterColon: true, mode: 'strict'
    }],
    '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
    '@stylistic/linebreak-style': 'off',
    '@stylistic/line-comment-position': 'off',
    '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@stylistic/max-len': ['error', {
      code: 120, tabWidth: 2, ignoreComments: true, ignoreUrls: true,
      ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true
    }],
    '@stylistic/max-statements-per-line': ['error', { max: 1 }],
    '@stylistic/member-delimiter-style': ['error', {
      multiline: { delimiter: 'semi', requireLast: true },
      singleline: { delimiter: 'semi', requireLast: true }
    }],
    '@stylistic/multiline-comment-style': 'off',
    '@stylistic/multiline-ternary': 'off',
    '@stylistic/new-parens': 'error',
    '@stylistic/newline-per-chained-call': 'off',
    '@stylistic/no-confusing-arrow': 'error',
    '@stylistic/no-extra-parens': 'off',
    '@stylistic/no-extra-semi': 'error',
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/nonblock-statement-body-position': 'off',
    '@stylistic/object-curly-newline': ['error', { consistent: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/object-property-newline': 'off',
    '@stylistic/one-var-declaration-per-line': 'error',
    '@stylistic/operator-linebreak': ['error', 'before'],
    '@stylistic/padded-blocks': ['error', 'never'],
    '@stylistic/padding-line-between-statements': 'off',
    '@stylistic/quote-props': ['error', 'as-needed'],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/rest-spread-spacing': ['error', 'never'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/semi-spacing': 'error',
    '@stylistic/semi-style': ['error', 'last'],
    '@stylistic/space-before-blocks': ['error', {
      functions: 'always', keywords: 'always', classes: 'always'
    }],
    '@stylistic/space-before-function-paren': ['error', {
      anonymous: 'always', named: 'never', asyncArrow: 'always'
    }],
    '@stylistic/space-in-parens': ['error', 'never'],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': 'error',
    '@stylistic/spaced-comment': ['error', 'always'],
    '@stylistic/switch-colon-spacing': 'error',
    '@stylistic/template-curly-spacing': 'error',
    '@stylistic/template-tag-spacing': 'error',
    '@stylistic/type-annotation-spacing': 'error',
    '@stylistic/type-generic-spacing': 'error',
    '@stylistic/type-named-tuple-spacing': 'error',
    '@stylistic/wrap-iife': 'off',
    '@stylistic/yield-star-spacing': ['error', 'before'],

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
      pathGroups: [{ pattern: '@*/**', group: 'internal', position: 'after' }],
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
  overrides: [
    {
      files: ['*.ts', '*.d.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
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
      },
      parserOptions: {
        project: true
      },
    }
  ],
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.d.ts'],
    },
  },
  ignorePatterns: ['node_modules']
}