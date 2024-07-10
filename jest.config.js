const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  coverageReporters: ['text', 'lcov'],
}

module.exports = createJestConfig(customJestConfig)