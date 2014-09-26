module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')

//        less : {
//            development : {
//
//            },
//            production : {
//                options : [ {
//                    paths: 'less'
//                }],
//                files : {
//                    'css/main.css' :
//                        'less/layout.less'
//                }
//            }
//        },
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
