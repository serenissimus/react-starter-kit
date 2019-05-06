module.exports = {
    rootDir: '.',
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['src', 'node_modules'],
    moduleNameMapper: {
        '^.+\\.(css|less)$': 'identity-obj-proxy',
        '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/jest/mocks/file.js',
    },
    testMatch: ['**/?(*.)(spec).(js|jsx)'],
};
