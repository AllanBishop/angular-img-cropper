module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['src/angular-img-cropper.js']
        }
      }
    },
    copy: {
      source: {
        cwd: 'src',
        src: [ 'angular-img-cropper.js' ],
        dest: 'src',
        expand: true
      },
      test: {
        cwd: 'src',
        src: [ '*.js' ],
        dest: 'test',
        expand: true
      },
    },

  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['uglify','copy']);
};