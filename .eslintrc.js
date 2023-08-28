module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  rules: {
    'arrow-parens': 'warn',
    'no-console': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['external', 'builtin', 'internal', ['parent', 'sibling', 'index']]
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    window: true
  }
}
