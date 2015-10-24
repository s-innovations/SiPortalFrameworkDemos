/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('devAfterBuild', ["sync:default"]);
    grunt.registerTask('devWatch', ["devAfterBuild", "watch:default"]);

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/libs",
                }
            }
        },
        watch: { /* when typescritp files are compiled with vs, then sync to wwwroot */
            default: {
                files: ["artifacts/dev/**/*", "src/**/templates/**/*.html", "src/**/content/**/*.less"],
                tasks: ["devAfterBuild"],
                options: {
                    debounceDelay: 100,
                },
            },
        },
        sync: {
            default: {
                files: [{
                    cwd: "artifacts/dev",
                    src: ["**/*"],
                    dest: "wwwroot/libs",
                }, {
                    cwd: "src",
                    src: ["**/content/**/*", "**/templates/**/*"],
                    dest: "wwwroot/libs"
                }
                ],
                pretend: false,
                verbose: true
            },
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};