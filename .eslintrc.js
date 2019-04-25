module.exports = {
    root: true,
    env: {
        browser: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 9,
    },
    plugins: [
        'react',
        'prettier'

    ],
    extends: [
        'airbnb',
        'eslint:recommended',
        'prettier',
        'prettier/react'
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: './webpack.config.js',
            }
        }
    },
    rules: {
        'max-len': ['error', 120],
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: [
                    '.js',
                    '.jsx',
                ]
            }
        ],
        'prettier/prettier': ['error'],
        'sort-imports': ['error', {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: [
                'none',
                'all',
                'multiple',
                'single',
            ],
        }],
    }
};
