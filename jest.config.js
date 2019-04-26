module.exports = {
    rootDir: './src',
    moduleNameMapper: {
        '^.+\\.(css|less)$': 'identity-obj-proxy',
    },
    testMatch: ['**/?(*.)(spec).(js|jsx)'],
};
