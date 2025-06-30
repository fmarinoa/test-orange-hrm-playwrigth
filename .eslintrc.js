module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: [
        '@typescript-eslint',
        'playwright',
        'cucumber',
        'import',
        'security',
        'sonarjs',
        'prettier'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:playwright/recommended',
        'plugin:cucumber/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:security/recommended',
        'plugin:sonarjs/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        // Estilo y calidad
        'prettier/prettier': 'warn',
        'import/order': ['warn', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always'
        }],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'warn',

        // Playwright
        'playwright/no-skipped-test': 'warn',
        'playwright/no-force-option': 'error',
    },
    ignorePatterns: ['.eslintrc.js', 'dist/', 'node_modules/']
};
