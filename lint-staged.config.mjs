export default {
  '**/*.{js,jsx,ts,tsx,json}': [
    () => 'yarn typecheck',
    () => 'yarn lint:fix',
  ],
};
