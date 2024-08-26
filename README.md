# Lissone ESLint config

## Whats included?

- Comments plugin;
- Import plugin;
- React plugin;
- React Hooks plugin;
- Security plugin;
- Stylistic plugin;
- JSX a11y plugin;
- Unicorn plugin;

## Setup

### React (with Next.js)

Install dependencies:
```
npm i -D eslint @lissone/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": [
    "@lissone/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

### React

Install dependencies:
```
npm i -D eslint @lissone/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@lissone/eslint-config/react"
}
```

### Node.js

Install dependencies:
```
npm i -D eslint @lissone/eslint-config
```
Inside `.eslintrc.json`
```
{
  "extends": "@lissone/eslint-config/node"
}
```