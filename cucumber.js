module.exports = {
    default: {
        formatOptions: {
            snippetInterface: 'async-await'
        },
        paths: [
            'tests/features/**/*.feature'
        ],
        dryRun: false,
        require: [
            'tests/steps/**/*.ts',
            'tests/hooks/hooks.ts'
        ],
        requireModule: [
            'ts-node/register'
        ],
        format: [
            'json:target/cucumber/report.json',
            'progress-bar'
        ],
        parallel: 2
    }
};
