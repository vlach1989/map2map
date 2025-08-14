// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		settings: {
			react: {
				version: '18.2',
			},
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': 'warn',
			'react-hooks/exhaustive-deps': 'off',
		},
		ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
	},
];
