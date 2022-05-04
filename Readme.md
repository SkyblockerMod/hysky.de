# Hysky Website

This is a [Next.js](https://nextjs.org/) project

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Learn more](#learn-more)
- [Code Style](#code-style)
  - [ESLint](#eslint)
  - [VS Code](#vs-code)

## Getting Started

1. Clone this repository

```bash
git clone git@github.com:SkyblockerMod/hysky.de.git
```

2. Install dependencies

```bash
npm install
```

3. Create and edit .env file

```bash
mv sample.env .env
vi .env
```
## Usage

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Code Style

### ESLint

[ESLint](https://eslint.org/) helps find and fix code style issues and force developers to follow same rules. Current configuration is based on [Airbnb style guide](https://github.com/airbnb/javascript).

Additional commands:

```bash
npm run lint
```

Run it to check the current status of eslint issues across project.

```bash
npm run lint:fix
```

Run it to fix all possible issues.

### VS Code

Following extensions required to simplify the process of keeping the same code style across the project:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

After installation enable "ESLint on save" by adding to your VS Code settings.json the following line:

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

You can navigate to settings.json by using Command Pallete (CMD+Shift+P) and then type "Open settings.json".

To enable Prettier go to Preferences -> Settings -> type "Format". Then check that you have esbenp.prettier-vscode as default formatter, and also enable "Format On Save".

Reload VS Code and auto-format will work for you.
