module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
require('load-grunt-tasks')(grunt);

grunt.initConfig({
  sass: {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        'css/main.css': 'scss/main.scss'
      }
    }
  },
  watch: {
    css: {
      files: '**/*.scss',
      tasks: ['sass'],
      options: {
        livereload: true,
      },
    },
  },
});

grunt.registerTask('default', ['watch']);


};