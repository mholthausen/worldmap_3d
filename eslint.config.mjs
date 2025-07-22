import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import babelParser from '@babel/eslint-parser';

export default [
  {
    ignores: ['node_modules/**', 'dist/**']
  },
  {
    files: ['src/**/*.js', 'src/**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        babelOptions: {
          presets: ['@babel/preset-react']
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    rules: {
      // additional rules can be added here
    }
  }
];
