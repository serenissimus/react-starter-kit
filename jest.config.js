module.exports = {
    rootDir: './test',
    moduleNameMapper: {
        '^.+\\.(css|less)$': 'identity-obj-proxy',
    },
    testMatch: ['**/?(*.)(spec).(js|jsx)'],
};
