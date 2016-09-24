module.exports = function(grunt){
    grunt.initConfig({
        watch: {
            default: {
                options: {
                    spawn: false,
                    interrupt: true
                },
                files: ["settings_edit.html", "js/settings_edit.js", "css/settings.css"],
                tasks: ["vulcanize"]
            },
            editNotification: {
                options: {
                    spawn: false,
                    interrupt: true
                },
                files: ["pages/edit-notification_edit.html", "pages/edit-notification_edit.js", "pages/edit-notification.css"],
                tasks: ["vulcanize"]
            }
        },
        vulcanize: {
            default: {
                options: {
                    inlineCss: false,
                    csp: "js/settings.js"
                },
                files: {
                    "settings.html": "settings_edit.html"
                }
            },
            editNotification: {
                options: {
                    inlineCss: false,
                    csp: "edit-notification.js"
                },
                files: {
                    "pages/edit-notification.html": "pages/edit-notification_edit.html"
                }
          }
        }
    });
    
    grunt.loadNpmTasks("grunt-vulcanize");
    grunt.loadNpmTasks("grunt-contrib-watch");
    
    grunt.registerTask("default", ["vulcanize", "watch"]);
    grunt.registerTask("editNotification", ["vulcanize", "watch"]);
};