import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import stylistic from '@stylistic/eslint-plugin'

export default withNuxt(
	{
		files: ['**/*.vue'],
		rules: {
			'vue/first-attribute-linebreak': 'off',
		},
	},
	eslintConfigPrettier,
	{
		files: ['**/*.{js,ts,mjs,cjs,vue}'],
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'@stylistic/semi': ['warn', 'never'],
			'@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
			'@stylistic/indent': ['warn', 'tab', { tabLength: 2 }],
			'@stylistic/no-mixed-spaces-and-tabs': 'warn',
			'@stylistic/no-trailing-spaces': 'warn',
			'@stylistic/eol-last': ['warn', 'always'],
			'@stylistic/linebreak-style': ['warn', 'unix'],
			'unicode-bom': ['warn', 'never'],
		},
	},
)
