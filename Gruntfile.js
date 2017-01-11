module.exports = function(grunt) {
    grunt.initConfig({
        postcss: {
            processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')() // minify the result
            ],
            dist: {
                src: 'assets/css/*.css'
            }
        },
        concat: {
            js: {
                options: {
                    stripBanners: 'block',
                    separator: ';\n'
                },
                 src: ['assets/js/jquery.fancybox.js',
                       'assets/js/jquery.fancybox-buttons.js',
                       'assets/js/fancybox.js',
                       'assets/js/calendar.js',
                       'assets/js/menu.js'],
                 dest: 'assets/js/build.js'
            },
            css: {
                src: [ 'assets/css/*.css' ],
                dest: 'assets/cssmin/style.css'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/cssmin',
                    src: ['style.css'],
                    dest: 'assets/cssmin/',
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
                    dest: 'assets/imgmin/'
                }]
            }
        },
        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'assets/jsmin/build.min.js': ['assets/js/build.js']
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['postcss','concat', 'cssmin', 'imagemin', 'uglify']);
};
