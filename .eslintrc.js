module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
<<<<<<< HEAD
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
=======
        'airbnb',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
<<<<<<< HEAD
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
=======
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
<<<<<<< HEAD
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
=======
        'react/jsx-props-no-spreading': 'warn',
        'react/react-in-jsx-scope': 'off',
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
<<<<<<< HEAD
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid', 'to'],
            },
        ],
=======
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'comma-dangle': 'off',
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
        'max-len': ['error', { ignoreComments: true, code: 100 }],
    },
    globals: {
        __IS_DEV__: true,
    },
<<<<<<< HEAD
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
=======
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
};
