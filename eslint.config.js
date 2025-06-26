import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        Promise: 'readonly',
        document: 'readonly',
        window: 'readonly',
        console: 'readonly'
      }
    },
    plugins: {
      react: reactPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-console': 'error',
      'comma-dangle': ['error', 'never'],
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignorePattern: '^import|<.*>$',
          tabWidth: 2
        }
      ],
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'always'],
      'one-var': ['error', 'never'],
      'no-confusing-arrow': 'error',
      'no-unused-vars': ['error', { ignoreRestSiblings: true }],
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
      'react/jsx-no-target-blank': 'off',
      'space-infix-ops': ['error', { int32Hint: false }]
    }
  }
];
