module.exports = function(config){

    config.set({
        basePath: '.',

        files: [
            'spec/**/*.js'
        ],

        frameworks: ['jasmine'],

        autoWatch: true,

        plugins: [
        	'karma-jasmine'
        ]
    });

};