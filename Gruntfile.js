'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {};
		config['watch'] = {
			options: {
			nospawn: true
		},
		coffee: {
			files: ['src/coffee/{,*/}*.coffee'],
			tasks: ['coffee:server']
		},
		compass: {
			files: ['src/styles/{,*/}*.{scss,sass}'],
			tasks: ['compass:server']
		}
	};

	config['compass'] = {
		options: {
			sassDir: 'src/styles/sass',
			cssDir: 'src/styles',
			importPath: 'src/bower_components',
			relativeAssets: false
		},
		dist: {},
		server: {}
	};
	
	config['coffee'] = {
		dist: {
			files: [{
				expand: true,
				cwd: 'src/coffee',
				src: '{,*/}*.coffee',
				dest: 'dist/scripts',
				ext: '.js'
			}]
		},
		server: {
			files: [{
				expand: true,
				cwd: 'src/coffee',
				src: '{,*/}*.coffee',
				dest: 'src/scripts',
				ext: '.js'
			}]
		}
	};
	
	config['clean'] = {
		build: {
			files: [{
				dot: true,
				src: [
					'dist/*',
					'!dist/.git*'
				]
			}]
		}
	};
	
	config['useminPrepare'] = {
		options: {
		dest: 'dist'
		},
		html: 'src/index.html'
	};
	
	config['usemin'] = {
		options: {
		dirs: ['dist']
		},
		html: ['dist/{,*/}*.html']
	};
	
	config['htmlmin'] = {
		dist: {
			options: {
				collapseBooleanAttributes: true,
				removeAttributeQuotes: true,
				removeRedundantAttributes: true,
				removeEmptyAttributes: true
			},
			files: [{
				expand: true,
				cwd: 'src',
				src: '{,*/}*.html',
				dest: 'dist'
			}]
		}
	};
	
	config['babel'] = {
		options: {
			sourceMap: true,
            presets: ['env']
		},
		dist: {
			files: {
				'.tmp/concat/scripts/compiled.js': '.tmp/concat/scripts/compiled.js'
			}
		}
	};
	
	config['uglify'] = {
		options: {
			mangle: false
		}
	};
	
	config['copy'] = {
		build: {
			files: [{
				expand: true,
				dot: true,
				cwd: 'src',
				dest: 'dist',
				src: []
			}]
		}
	};
	
	config['cssmin'] = {
		dist: {
			files: {
				'dist/styles/main.css': [
					'src/styles/{,*/}*.css'
				]
			}
		}
	};
	
	grunt.initConfig(config);
	
	var tasks = [
		'clean:build',
		'useminPrepare',
		'htmlmin',
		'cssmin',
		'concat',
		'babel',
		'uglify',
		'copy',
		'usemin'
	];
	
    grunt.registerTask('build', tasks);
};
