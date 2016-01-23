module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        wiredep: {
            task: {
                src: ['public/index.html']
            }
        },
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {"public/styles/styles.css": "public/styles/less/app-styles.less"}
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true
                },
                files: {"public/styles/styles.css": "public/styles/less/app-styles.less"}
            }
        }
    });

    grunt.registerTask('default', ['wiredep', 'less:development']);
    grunt.registerTask('css', ['less:development']);
};