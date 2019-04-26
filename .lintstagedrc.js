module.exports = {
    '*.{js,jsx}': ['yarn lint', 'yarn test:staged', 'git add'],
    '*.{png,jpeg,jpg,svg}': ['imagemin-lint-staged', 'git add'],
};
