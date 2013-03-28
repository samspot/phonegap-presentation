module.exports = function(grunt) {
    grunt.initConfig({
      copy: {
        app: {
          files: {
            'platforms/ios/www/': 'app/**/*',
            'platforms/android/assets/www/': 'app/**/*'
          }
        }
      },
      watch: {
        app: {
          files: 'app/**/*',
          tasks: ['copy:app']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', 'copy:app');
};