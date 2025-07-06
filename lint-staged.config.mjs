export default {
  '*.{js,jsx,ts,tsx}': [
    () => 'pnpm typecheck',
    'prettier --write',
    'eslint --fix',
  ],
  '*.{json,md}': 'prettier --write',
};
