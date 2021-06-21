const { resolve } = require('path');
const root = resolve(__dirname);

// This file configure how JEST finding unit tests
module.exports = {
    // stop running tests after 'n' failures
    bail: true,

    // path for root directory for scanning,search and executes tests
    rootDir: root,

    // label for test
    displayName: 'root-tests',

    // pattern matching for finding test files
    testMatch: [
      '<rootDir>/**/?(*.)+(test|spec).ts'
    ],

    // test environment , whether it is node or jsdom
    testEnvironment: 'node',

    // cler mocks, clear instances
    clearMocks: true,

    // preset
    preset: "ts-jest"
}
