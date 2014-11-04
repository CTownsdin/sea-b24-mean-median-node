module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['lib/*.js']
    },
    jscs: {
      src: '*.js',
      options: {
          config: '.jscsrc',
          requireCurlyBraces: [ 'if' ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('test', ['jshint', 'jscs']);
  grunt.registerTask('default', ['test']);
};
