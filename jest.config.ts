import nextJest from 'next/jest';

const ignorePatterns = ['<rootDir>/coverage/', '<rootDir>/dist/', '<rootDir>/node_modules/'];
const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: ['/node_modules/(?!crypto-hash)'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ignorePatterns,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
