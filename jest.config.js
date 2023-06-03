export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^.+\\.(css|less)$': '<rootDir>/__mocks__/cssStub.ts'
    },
    setupFilesAfterEnv: [
        "<rootDir>/__mocks__/setupTests.ts"
    ]
  };
  