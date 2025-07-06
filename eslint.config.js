const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginPlaywright = require('eslint-plugin-playwright');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginSecurity = require('eslint-plugin-security');
const eslintPluginSonarjs = require('eslint-plugin-sonarjs');

module.exports = [
    {
        files: ['*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
            prettier: eslintPluginPrettier,
            playwright: eslintPluginPlaywright,
            import: eslintPluginImport,
            security: eslintPluginSecurity,
            sonarjs: eslintPluginSonarjs,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',

            'playwright/no-skipped-test': 'warn',
            'playwright/no-force-option': 'error',

            'import/order': ['warn', {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            }],

            'security/detect-object-injection': 'off',
            'prettier/prettier': 'warn',
            'sonarjs/no-duplicate-string': 'warn',
        },
    },
];
