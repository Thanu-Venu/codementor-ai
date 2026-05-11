# CodeMentor AI

CodeMentor AI is a VS Code extension project (TypeScript) currently set up with a starter command and activation flow.

## Current Features

- Shows a notification: `Hello World from codementor-ai!`
- Contributes command: `codementor-ai.helloWorld` (`Hello World`)
- Activates on startup (`onStartupFinished`)

## Project Structure

```text
src/
	extension.ts              # Extension entry point (activate/deactivate)
	test/extension.test.ts    # Sample extension test
package.json                # Extension manifest and scripts
tsconfig.json               # TypeScript config
```

## Requirements

- Node.js 18+ (recommended: latest LTS)
- VS Code 1.118.0 or newer

## Install Dependencies

```bash
npm install
```

## Build

```bash
npm run compile
```

For continuous build while developing:

```bash
npm run watch
```

## Run the Extension Locally

1. Open this folder in VS Code.
2. Run `npm run watch` (or ensure build is up to date).
3. Press `F5` to open an **Extension Development Host** window.
4. You should see a toast notification: `Hello World from codementor-ai!`.
5. Open Command Palette (`Ctrl+Shift+P`) and run `Hello World`.

## Lint and Test

```bash
npm run lint
npm test
```

## GitHub Repository

This project is connected to:

`https://github.com/Thanu-Venu/codementor-ai.git`

Common workflow:

```bash
git add .
git commit -m "your message"
git push
```

## Next Improvements

- Replace starter Hello World behavior with real AI assistant features.
- Add extension settings in `contributes.configuration`.
- Add command-level tests and activation tests.

## License

Add your preferred license file (for example, MIT) before publishing publicly.
