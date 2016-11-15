/**
 * Gruntfile
 */

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

    grunt.initConfig({
    	// Mocha config
        mochaTest: {
            test: {
                src: ['frontend/**/*.js']
            }
        },
	    // Watch task config
	    watch: {
	      webpack: {
	        files: "angular-typescript/**/*",
	        tasks: ['webpack:dev']
	      }
	    },
	    webpack: {
	    	dev: require('./webpack-conf/development.js')
	    },
	    // Nodemon
		nodemon: {
			dev: {
				script: '.',
				options: {
					ignore: ['webpack', '.angular-typescript', 'Gruntfile.js', 'test/**', 'public/**', 'logs/**', 'views/**']
				}
			}
		},
		concurrent: {
	        dev: ['webpack:dev', 'nodemon:dev', 'watch:webpack'],
            options: {
                logConcurrentOutput: true
            }
	    }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('test', 'mochaTest');
	grunt.registerTask('start', ['concurrent:dev']);
};
