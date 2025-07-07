export default {
  '*.{js,jsx,ts,tsx}': [
    () => 'yarn typecheck',
    'prettier --write',
    'eslint --fix',
  ],
  '*.{json,md}': 'prettier --write',
};
