import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import baseDefault from '@phoenix35/eslint-config'
export default tseslint.config(
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'cypress.config.ts',
      '**/dev/*',
      '**/dist/*',
      '**/tests/*',
      'tsconfig.json',
    ],
  },
  ...baseDefault,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // curly braces for all blocks
      'curly': ['error', 'all'],
      // double quotes
      '@stylistic/js/quotes': ['error', 'double', { avoidEscape: true }],
      // statement beside the control
      '@stylistic/js/nonblock-statement-body-position': ['error', 'below'],
      // disable camelcase rule
      'camelcase': 'off',
      // disable new-cap rule
      'new-cap': 'off',
      'no-undefined': 'off',
    },
  },
)
