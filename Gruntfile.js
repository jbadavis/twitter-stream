module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        clean: ['./public/'],

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['fonts/**/*'], dest: 'public/'}
                ],
            },
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public/css/main.css': 'src/sass/main.scss'
                }
            }
        },

        concat: {
            dist: {
                src: ['src/js/namespace.js','src/js/libs/*','src/js/components/*'],
                dest: 'public/js/main.js',
            },
        },

        watch: {
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'public/css/*.css',
                        'public/js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'http://localhost:3000'
                }
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['clean','copy','concat','sass','browserSync','watch']);

};
