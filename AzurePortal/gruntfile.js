/// <binding BeforeBuild='bower:install' AfterBuild='devAfterBuild' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-tsd');

    grunt.registerTask('devAfterBuild', ["sync:default"]);
    grunt.registerTask('devWatch', ["devAfterBuild", "watch:default"]);

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "wwwroot/libs",
                    verbose:true,
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
        },
        tsd: {
            refresh: {
                options: {
                    // execute a command
                    command: 'reinstall',

                    //optional: always get from HEAD
                    latest: true,

                    // specify config file
                    config: './tsd.json',

                    // experimental: options to pass to tsd.API
                    opts: {
                        // props from tsd.Options
                    }
                }
            }
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};