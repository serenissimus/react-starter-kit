module.exports = {
    presets: [
        '@babel/preset-flow',
        [
            'airbnb',
            {
                targets: {
                    chrome: 50,
                    ie: 11,
                    firefox: 45
                }
            }
        ]
    ]
};
