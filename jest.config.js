
module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
    setupFiles: ['<rootDir>/jest/setupTests.js'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: true,
    transform: {
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/test-helper/styleMock.js",
      "\\.(gif|ttf|eot|svg)$": "<rootDir>/test-helper/fileMock.js"
  },
  };