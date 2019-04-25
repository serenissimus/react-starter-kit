module.exports = {
    '*.{js,jsx}': ['yarn lint', 'git add'],
    '*.{png,jpeg,jpg,svg}': ['imagemin-lint-staged', 'git add']
};
