// // @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
        files: ['**/*.vue'],
        rules: {
            "vue/first-attribute-linebreak": 'off',
        }
    },
    {
        files: ['**/*.ts', "**/*.js", "**/*.vue"],
        rules: {
            "indent": ["error", "tab"],
            "quotes": ["error", "single"]
        }
    }
)
