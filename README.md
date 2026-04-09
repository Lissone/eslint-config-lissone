<h1 align="center">
  Lissone ESLint Config
</h1>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#plugins">Plugins</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#setup">Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#version">Version</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT" alt="License">
  <img src="https://img.shields.io/github/repo-size/Lissone/eslint-config-lissone" alt="Repo size" />
  <img src="https://img.shields.io/github/languages/top/Lissone/eslint-config-lissone" alt="Top lang" />
  <img src="https://img.shields.io/github/stars/Lissone/eslint-config-lissone" alt="Stars repo" />
  <img src="https://img.shields.io/github/forks/Lissone/eslint-config-lissone" alt="Forks repo" />
  <img src="https://img.shields.io/github/issues-pr/Lissone/eslint-config-lissone" alt="Pull requests">
  <img src="https://img.shields.io/github/last-commit/Lissone/eslint-config-lissone" alt="Last commit" />
</p>

<p align="center">
  <a href="https://github.com/Lissone/eslint-config-lissone/issues">Report bug</a>
  ·
  <a href="https://github.com/Lissone/eslint-config-lissone/issues">Request feature</a>
</p>

## Description

I created this ESLint extension with the goal of keeping my projects consistently standardized and simplifying the lint configuration process across different environments. The main idea is to centralize all the rules and path aliases I frequently use, ensuring consistency and code quality, regardless of the project.

I'm open to any suggestions that can contribute to the improvement of this shared ESLint configuration.

## Plugins

This configuration includes the following plugins:

- [Typescript](https://github.com/typescript-eslint/typescript-eslint)
- [Stylistic](https://github.com/eslint-community/eslint-plugin-stylistic)
- [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [Promise](https://github.com/eslint-community/eslint-plugin-promise)
- [Import](https://github.com/import-js/eslint-plugin-import)
- [Import Resolver Alias](https://github.com/johvin/eslint-import-resolver-alias)
- [Security](https://github.com/nodesecurity/eslint-plugin-security)
- [ESLint Comments](https://github.com/eslint-community/eslint-plugin-eslint-comments)
- [React](https://github.com/jsx-eslint/eslint-plugin-react)
- [React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [Next](https://github.com/vercel/next.js)
- [JSX a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

## Setup

This package uses ESLint's **flat config** format (ESLint 9+). Create an `eslint.config.js` file at the root of your project.

### React (with Next.js)

Install dependencies:

```bash
npm i -D eslint @lissone/eslint-config
```

Inside `eslint.config.js`:

```js
const nextConfig = require('@lissone/eslint-config/next')

module.exports = [...nextConfig]
```

### React

Install dependencies:

```bash
npm i -D eslint @lissone/eslint-config
```

Inside `eslint.config.js`:

```js
const reactConfig = require('@lissone/eslint-config/react')

module.exports = [...reactConfig]
```

### Node.js

Install dependencies:

```bash
npm i -D eslint @lissone/eslint-config
```

Inside `eslint.config.js`:

```js
const nodeConfig = require('@lissone/eslint-config/node')

module.exports = [...nodeConfig]
```

## Configuration

### Import Paths

The default path aliases are already configured inside each config. To override or extend them, add a new config object to your `eslint.config.js`:

```js
const reactConfig = require('@lissone/eslint-config/react')

module.exports = [
  ...reactConfig,
  {
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['@shared', './src/shared'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
]
```

If your project uses TypeScript, make sure to add these aliases to your `tsconfig.json` as well:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["./*"],
      "@shared/*": ["shared/*"]
    }
  }
}
```

### Overriding Rules

You can override any rule by appending a config object at the end of the array:

```js
const reactConfig = require('@lissone/eslint-config/react')

module.exports = [
  ...reactConfig,
  {
    rules: {
      'no-console': 'warn',
    },
  },
]
```

## Version

This configuration requires ESLint version **9.0.0** or higher. If your project uses TypeScript, it is recommended to use version **5.0.0** or higher.

## License

Distributed under the MIT License. See `LICENSE` for more information.

<h4 align="center">
  Made with ❤️ by <a href="https://github.com/Lissone" target="_blank">Lissone</a>
</h4>

<hr />
