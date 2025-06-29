module.exports = {
    default: {
        requireModule: [
            'ts-node/register'
        ],
        require: [
            'tests/steps/**/*.ts',
            'tests/hooks/hooks.ts'
        ],
        formatOptions: {
            snippetInterface: 'async-await'
        },
        paths: [
            'tests/features/**/*.feature'
        ],
        dryRun: false
    }
};
