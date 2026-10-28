import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
	{ ignores: ['dist'] },
	js.configs.recommended,
	reactHooks.configs.flat.recommended,
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: { ...globals.browser },
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		rules: {
			'no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
			eqeqeq: 'warn',
			'no-var': 'warn',
			'object-shorthand': ['warn', 'properties'],
			'prefer-arrow-callback': 'warn',
			'prefer-const': ['warn', { destructuring: 'all' }],
			'prefer-template': 'warn',
		},
	},
	{
		files: ['*.config.js'],
		languageOptions: { globals: { ...globals.node } },
	},
];
