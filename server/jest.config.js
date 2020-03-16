module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['ts', 'js'],
    testEnvironment: 'node',
    transform: {
        '.ts': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js']
};
