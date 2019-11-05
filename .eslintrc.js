module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
  },
  globals: {
    Greet_text: true
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'no-console': 'off',
    'quotes': [2, 'single']
  }
}