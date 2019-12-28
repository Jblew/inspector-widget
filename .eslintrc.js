module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
        'import/prefer-default-export': 'off',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
};
