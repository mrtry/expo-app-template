/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      from: { path: '^src/features/([^/]+)' },
      name: 'features-should-not-depend-on-each-other',
      severity: 'error',
      to: { path: '^src/features/([^/]+)', pathNot: '^src/features/$1' },
    },
    {
      from: { path: ['^src/components', '^src/lib', '^src/hooks'] },
      name: 'common-should-not-depend-on-features',
      severity: 'error',
      to: { path: '^src/features' },
    },
    {
      from: {},
      name: 'no-circular',
      severity: 'error',
      to: { circular: true },
    },
  ],
  options: {
    doNotFollow: { path: 'node_modules' },
    tsConfig: { fileName: 'tsconfig.json' },
  },
};
