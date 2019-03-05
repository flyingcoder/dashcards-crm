module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/strongly-recommended', '@vue/prettier'],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    semi: 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none'
      }
    ],
    'vue/attribute-hyphenation': 'warning',
    'vue/component-name-in-template-casing': 'warning',
    'vue/html-indent': 'warning',
    'vue/require-default-prop': 'off',
    'vue/prop-name-casing': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
}
