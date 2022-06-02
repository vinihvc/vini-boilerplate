// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true
}

module.exports = config

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/']
  }
}
