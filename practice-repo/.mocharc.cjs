// Mocha configuration for every suite. See README.md.
//
// Locally, results print with the spec reporter. In CI (when CI is set), they
// also go to JUnit XML files in test-results/, which CI uploads.
module.exports = {
  require: ['tests/support/hooks.js'],
  timeout: 30000,
  ...(process.env.CI
    ? {
        reporter: 'mocha-multi-reporters',
        reporterOption: ['configFile=tests/support/reporters.json'],
      }
    : { reporter: 'spec' }),
};
