module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // Indentation rules
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, { baseIndent: 1 }],
        indent: ['error', 4],
        // Other rules
        'vue/multi-word-component-names': 'off',
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
};
