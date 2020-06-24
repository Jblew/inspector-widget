module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'no-use-before-define': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': 'off',
    'func-names': 'off',
    'prefer-template': 'off',
    'eqeqeq': 'off',
    'import/order': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
