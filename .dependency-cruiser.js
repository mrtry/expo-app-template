/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: 'features-should-not-depend-on-each-other',
      severity: 'error',
      from: { path: '^src/features/([^/]+)' },
      to: { path: '^src/features/([^/]+)', pathNot: '^src/features/$1' },
    },
    {
      name: 'common-should-not-depend-on-features',
      severity: 'error',
      from: { path: ['^src/components', '^src/lib', '^src/hooks'] },
      to: { path: '^src/features' },
    },
    {
      name: 'no-circular',
      severity: 'error',
      from: {},
      to: { circular: true },
    },
  ],
  options: {
    tsConfig: { fileName: 'tsconfig.json' },
    doNotFollow: { path: 'node_modules' },
  },
};
