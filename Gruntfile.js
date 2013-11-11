module.exports = function (grunt) {

	'use strict';

	/*
		 Javascript settings - Edit this section
		 ========================================================================== */
	/**
	 * Specify which js files you want to include
	 */
	var jsFileList = [
		'js/helpers/helpers.js',
		'js/helpers/console.js',
		'js/script.js'
	];

	/**
	 * Specify your output directory
	 */
	var distDir = 'js/dist/';

	/**
	 * Specify the name of your compiled JS file
	 * which will be placed in the directory you define above
	 */
	var jsFile = 'app.min.js';

	/* ==================== */

	/**
	 * Project configuration
	 */
	grunt.initConfig({
		pkg: require('./package'),


		/**
		 * Sass compilation
		 * https://github.com/gruntjs/grunt-contrib-sass
		 * Separate options for dev and production environments
		 * Includes kickoff.scss and kickoff-old-ie.scss by default
		 * Also creates source maps
		 */
		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					lineNumbers: false,
					debugInfo : false,
					precision : 8,
					sourcemap : true
				},
				files: {
					'css/social-links.css': 'scss/social-links.scss'
				}
			},
			production: {
				options: {
					style: 'compressed',
					precision : 8
				},
				files: {
					'css/social-links.css': 'scss/social-links.scss'
				}
			}
		},


		/**
		 * Watch
		 * https://github.com/gruntjs/grunt-contrib-watch
		 * Watches your scss, js etc for changes and compiles them
		 */
		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: ['sass:dev']
				// tasks: ['sass:dev', 'autoprefixer:dist', 'csso']
			},

			livereload: {
				options: { livereload: true },
				files: [
					'css/*.css'
				]
			}
		},


		/**
		 * Autoprefixer
		 * https://github.com/ai/autoprefixer
		 * Auto prefixes your CSS using caniuse data
		 */
		autoprefixer: {
			dist : {
				options: {
					// Task-specific options go here - we are supporting
					// the last 2 browsers, any browsers with >1% market share,
					// and ensuring we support IE7 + 8 with prefixes
					browsers: ['last 2 versions', '> 1%', 'ie 8', 'ie 7']
				},
				files: {
					'css/kickoff.prefixed.css': 'css/kickoff.css',
					'css/kickoff-old-ie.prefixed.css': 'css/kickoff-old-ie.css'
				}
			}
		},


		/**
		 * Connect
		 * https://github.com/gruntjs/grunt-contrib-connect
		 * Start a static web server
		 */
		connect: {
			server: {
				options: {
					// port: 9001,
					open: true,
					livereload: true
				}
			}
		},


		/**
		 * CSSO
		 * https://github.com/t32k/grunt-csso
		 * Minify CSS files with CSSO
		 */
		csso: {
			dist: {
				files: {
					'css/kickoff.min.css': ['css/kickoff.prefixed.css'],
					'css/kickoff-old-ie.min.css': ['css/kickoff-old-ie.prefixed.css']
				},

			}
		},

		// webfont: {
		// 	icons: {
		// 		src: 'img/icons/*.svg',
		// 		dest: 'build/fonts',
		// 		destCss: 'css',
		// 		options: {
		// 			stylesheet: 'scss',
		// 			relativeFontPath: '/build/fonts'
		// 		}
		// 	}
		// },

		fontfactory: {
			options: {
				font: "social"
			},
			font: 'img/icons/*.svg',
			// dest: 'font/'
		},

		svgmin: {                       // Task
			options: {                  // Configuration that will be passed directly to SVGO
				plugins: [{
					removeViewBox: false
				}]
			},
			dist: {                     // Target
				files: [{               // Dictionary of files
					expand: true,       // Enable dynamic expansion.
					cwd: 'img/src',     // Src matches are relative to this path.
					src: ['**/*.svg'],  // Actual pattern(s) to match.
					dest: 'img/',       // Destination path prefix.
					ext: '.min.svg'     // Dest filepaths will have this extension.
					// ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
				}]
			}
		},

		grunticon: {
			icons: {
				options: {
					src: "img/icons/",
					dest: "css/icons/"
				}
			}
		}
	});

	// Load all the grunt tasks
	require('load-grunt-tasks')(grunt);


	/**
	 * Available tasks:
		 * grunt        : run jshint, uglify and sass:dev
		 * grunt watch  : run sass:dev, uglify and livereload
		 * grunt dev    : run jshint, uglify and sass:dev
		 * grunt deploy : run jshint, uglify and sass:production
	 */

	/**
	 * Default task
	 * run jshint, uglify and sass:dev
	 */
	// Default task
	grunt.registerTask('default', ['jshint', 'uglify', 'sass:dev']);


	/**
	 * A task for development
	 * run jshint, uglify and sass:dev
	 */
	grunt.registerTask('dev', ['jshint', 'uglify', 'sass:dev']);

	/**
	 * A task for your production environment
	 * run jshint, uglify and sass:production
	 */
	grunt.registerTask('deploy', ['jshint', 'uglify', 'sass:production']);
	// grunt.registerTask('production', ['jshint', 'uglify', 'sass:production', 'autoprefixer', 'csso']);

	/**
	 * A task for for a static server with a watch
	 * run connect and watch
	 */
	grunt.registerTask("serve", ["connect", "watch"]);

};
