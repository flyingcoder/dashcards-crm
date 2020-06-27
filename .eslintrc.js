module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: ['plugin:vue/strongly-recommended'],

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        semi: 'off',
        'vue/attribute-hyphenation': 'warning',
        'vue/component-name-in-template-casing': 'warning',
        'vue/html-indent': 'off',
        'vue/require-default-prop': 'off',
        'vue/prop-name-casing': 'off',
        'vue/max-attributes-per-line': 'off',
        // 'vue/html-self-closing' : 'off',
        'vue/singleline-html-element-content-newline': 'off'
    },

    parserOptions: {
        parser: 'babel-eslint'
    }
}