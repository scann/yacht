module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['assets/js/calendar.js', 'assets/js/menu.js', 'assets/js/jquery.fancybox.js', 'assets/js/jquery.fancybox-buttons.js'],
                    dest: 'assets/js/build.js'
                }
            },
            css: {
                src: [ 'assets/css/*.css' ],
                dest: 'assets/css/styles.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['styles.css'],
                    dest: 'assets/css/',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/img/'
                }]
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'assets/js/build.min.js': ['assets/js/build.js']
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'cssmin', 'imagemin', 'uglify']);
};
