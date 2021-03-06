/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/scripts/setupTests.ts'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js,jsx}',

    // ignore test utils
    '!<rootDir>/src/test-utils.tsx',

    // ignore  nextjs pages
    '!<rootDir>/src/pages/_app.tsx',
    '!<rootDir>/src/pages/_document.tsx',

    // index files are always `export * from "..."`
    '!<rootDir>/src/**/index.ts',
  ],
  transform: {
    '\\.(jpe?g|png|gif)$': '<rootDir>/scripts/nextImageTransformer.js',
  },
  moduleNameMapper: {
    // https://github.com/microsoft/accessibility-insights-web/pull/5421#issuecomment-1109168149
    '^nanoid': require.resolve('nanoid'),
    '^.+\\.module\\.(scss)$': 'identity-obj-proxy',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
