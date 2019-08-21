module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jest': true
    },
    "globals": {
        "module": "readonly",
        "__dirname": "readonly",
        "exports": "readonly"
    },
    'extends': ['eslint:recommended', 'plugin:react/recommended'],
    'settings': {
        'react': {
            'createClass': 'createReactClass',
            'pragma': 'React',
            'version': '16.5.2'
        },
        'propWrapperFunctions': ['forbidExtraProps']
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
            'modules': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        // Disable this rule because prettier will cover it
        'indent': 'off',
        'prefer-arrow-callback': ['error'],
        'func-style': ['error', 'expression', { allowArrowFunctions: true }],
        'space-infix-ops': ['error'],
        'key-spacing': ['error'],
        'react/jsx-indent': ['error', 4],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'no-console': ['error', { allow: ['debug', 'info', 'error'] }]
    }
};
