module.exports = {
    rootDir: './tests',
    moduleNameMapper: {
        '^.+\\.(css|less)$': 'identity-obj-proxy',
        '^.+\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
    },
    testMatch: ['**/?(*.)(spec).(js|jsx)'],
};
