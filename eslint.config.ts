import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginSecurity from 'eslint-plugin-security';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';

export default [
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

            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                },
            ],

            'security/detect-object-injection': 'off',
            'prettier/prettier': 'warn',
            'sonarjs/no-duplicate-string': 'warn',
        },
    },
];
