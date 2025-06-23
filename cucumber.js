module.exports = {
    default: {
        requireModule: [
            'ts-node/register'
        ],
        require: [
            'tests/steps/**/*.ts'
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
