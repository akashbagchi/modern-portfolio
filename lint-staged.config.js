export default {
  // Lint & format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Lint & format Vue files
  '**/*.vue': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Format other files
  '**/*.(md|json|css)': (filenames) => `pnpm prettier --write ${filenames.join(' ')}`,
}
