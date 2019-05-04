
module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
    setupFiles: ['<rootDir>/jest/setupTests.js'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
  };