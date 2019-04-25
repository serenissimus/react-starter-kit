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
        'jsdoc',
        'react',
        'prettier',
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
        },
        jsdoc: {
            tagNamePreference: {
                param: 'param',
                returns: 'returns',
            },
        },
    },
    rules: {
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-examples': 'error',
        'jsdoc/check-indentation': 'error',
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-syntax': 'error',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/check-types': 'error',
        'jsdoc/newline-after-description': ['error', 'always'],
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/require-description-complete-sentence': 'error',
        'jsdoc/require-hyphen-before-param-description': 'error',
        'jsdoc/require-param': 'error',
        'jsdoc/require-param-description': 'error',
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-returns': 'error',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-returns-type': 'error',
        'jsdoc/valid-types': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-debugger': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-implicit-globals': ['error'],
        'no-implied-eval': 'error',
        'no-labels': 'error',
        'no-multi-str': 'error',
        'no-new-object': 'error',
        'no-octal-escape': 'error',
        'no-self-compare': 'error',
        'no-shadow-restricted-names': 'error',
        'no-unreachable': 'error',
        'no-unsafe-negation': 'error',
        'no-var': 'error',
        'no-with': 'error',
        'max-lines': ['error', { max: 120, skipBlankLines: true, skipComments: true }],
        'radix': 'error',
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
        'valid-typeof': 'error',
    }
};
