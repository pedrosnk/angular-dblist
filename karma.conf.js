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
        ],
        browsers: ['PhantomJS', 'PhantomJS_custom'],

        customLaunchers: {
          'PhantomJS_custom': {
            base: 'PhantomJS',
            options: {
              windowName: 'my-window',
              settings: {
                webSecurityEnabled: false
              }
            },
            flags: ['--remote-debugger-port=9000']
          }
        }
    });

};
