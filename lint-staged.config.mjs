export default {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'npm run typecheck'],
  '*.{json,md}': 'prettier --write',
};
