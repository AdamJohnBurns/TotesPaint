module.exports = function (grunt) {
    'use strict';
    
    var SERVER_PORT = 9001,
        LIVERELOAD_PORT = 9002,
        
        packagedFiles = ['index.html', 'package.json', 'img/*', 'dist/css/*', 'dist/js/*'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/js/scripts.js': 'dist/js/scripts.js'
                }
            }
        },
        
        clean: ['builds/TotesPaint/*'],
        
        compress: {  
            options: {
              archive: 'builds/testapp.zip'
            },
            files: {
                src: packagedFiles,
                flatten: true
            }
        },
        
        connect: {
            server: {
                options: {
                    port: SERVER_PORT,
                    base: './',
                    livereload: LIVERELOAD_PORT,
                    open: true
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/**/*.js'],
                dest: 'dist/js/scripts.js'
            },
        },
        
        nodewebkit: {
            options: {
                platforms: ['win64'],
                buildDir: './builds',
                winIco: 'img/facebook.ico'
            },
            src: packagedFiles
        },
        
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/styles.css': 'scss/main.scss'
                }
            }
        },
        
        shell: {
            options: {
                stderr: false
            },
            runTest: {
                command: '"../NWJS/nw.exe" <%= compress.options.archive %>'
            },
            runBuild: {
                command: '"builds/TotesPaint/win64/TotesPaint.exe"'
            }
        },
        
        watch: {
            js: {
                files: 'js/**/*.js',
                tasks: ['concat', 'babel'],
                options: {
                    interrupt: true,
                    livereload: LIVERELOAD_PORT
                }
            },
            scss: {
                files: 'scss/**/*.scss',
                tasks: ['sass'],
                options: {
                    interrupt: true,
                    livereload: LIVERELOAD_PORT
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('buildAssets', ['sass', 'concat', 'babel']);
    grunt.registerTask('buildApp', ['buildAssets', 'clean', 'nodewebkit', 'shell:runBuild']);
    grunt.registerTask('testApp', ['buildAssets', 'compress', 'shell:runTest']);
    
    grunt.registerTask('default', ['buildAssets', 'connect', 'watch']);
};