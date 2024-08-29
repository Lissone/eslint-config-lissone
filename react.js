module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:security/recommended-legacy',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    '@stylistic',
    'eslint-comments',
    'import',
    'promise',
    'react',
    'react-hooks',
    'security',
    'unicorn',
    'jsx-a11y'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
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

    'react/no-danger': 'error',
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
    '@stylistic/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],

    'eslint-comments/disable-enable-pair': 'off',

    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-cycle': ['error', { maxDepth: 1 }],
    'import/no-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'unknown',
        ['parent', 'sibling', 'index'],
        'type',
        'object'
      ],
      pathGroups: [
        { pattern: '@assets/**', group: 'internal', position: 'after' },
        { pattern: '@routes/**', group: 'internal', position: 'after' },
        { pattern: '@interfaces/**', group: 'internal', position: 'after' },
        { pattern: '@services/**', group: 'internal', position: 'after' },
        { pattern: '@contexts/**', group: 'internal', position: 'after' },
        { pattern: '@hooks/**', group: 'internal', position: 'after' },
        { pattern: '@components/**', group: 'internal', position: 'after' },
        { pattern: '@pages/**', group: 'internal', position: 'after' },
        { pattern: '@utils/**', group: 'internal', position: 'after' },
        { pattern: '@shared/**', group: 'internal', position: 'after' },
        { pattern: '@styles/**', group: 'object', position: 'after' },
        { pattern: '**/styles.ts', group: 'object', position: 'after' }
      ],
      alphabetize: { 'order': 'asc', 'caseInsensitive': false },
      distinctGroup: true,
      'newlines-between': 'always',
      warnOnUnassignedImports: false,
      pathGroupsExcludedImportTypes: ['builtin']
    }],

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
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
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
        '@typescript-eslint/no-explicit-any': 'off',
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
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [ // aliases defined in tsconfig
          ['@assets', './src/assets'],
          ['@routes', './src/routes'],
          ['@interfaces', './src/interfaces'],
          ['@services', './src/services'],
          ['@contexts', './src/contexts'],
          ['@hooks', './src/hooks'],
          ['@components', './src/components'],
          ['@pages', './src/pages'],
          ['@utils', './src/utils'],
          ['@shared', './src/shared'],
          ['@styles', './src/styles']
        ],
        extensions: ['.ts', '.tsx']
      }
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['*.ts', '*.tsx', '*.d.ts'],
    },
  },
  ignorePatterns: ['node_modules']
}