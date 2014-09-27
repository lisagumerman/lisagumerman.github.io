module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 8081,
                    base: '.',
                    keepalive:true
                }
            }
        },

        less : {
            development : {

            },
            production : {
                options : [ {
                    paths: 'less'
                }],
                files : {
                    'css/application.css' :
                        'less/application.less'
                }
            }
        },

        bowercopy : {
            options : {
                srcPrefix : 'libs'
            },
            css : {
                options : {
                    destPrefix : 'less'
                },
                files : {
                    'less/metro.css' : 'metro-ui-css/css/metro-bootstrap.css',
                    'less/metro-responsive.css' : 'metro-ui-css/css/metro-bootstrap-responsive.css'

                }
            }

        },

        watch : {
            files :'less/*',
            tasks: ['less']
        }
//
//
//        uglify : {
//            build : {
//                files: [{
//                    src: [
//                        'js/**/*.js'
//                    ],
//                    dest: '_site/js/application.js',
//                    cwd: '.'
//                }]
//            }
//        }
    });

    grunt.loadNpmTasks("grunt-bowercopy");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-less");
};
