module.exports = function(config){

    config.set({
        basePath: '.',

        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/multiselect/js/jquery.multi-select.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'js/modules/dblist.js',
            'js/directives/dblist_directive.js',
            'spec/**/*.js'
        ],

        frameworks: ['jasmine'],

        autoWatch: true,

        plugins: [
        	'karma-jasmine',
          'karma-phantomjs-launcher'
        ],

        browsers: ['PhantomJS']
    });

};
