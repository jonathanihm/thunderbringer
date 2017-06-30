var fs = require('fs');


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	
	clean: {
		contents: ['build/*']
	},
	
	copy: {
	  main: {
		files: [
		  // includes files within path and its sub-directories
		  {expand: true, cwd: 'bower_components/bootstrap/dist/js', src: ['**/*.js'], dest: 'build/js/bootstrap'},
		  {expand: true, cwd: 'bower_components/bootstrap/dist/css', src: ['**/*'], dest: 'build/css/bootstrap'},
		  {expand: true, cwd: 'bower_components/bootstrap/dist/fonts', src: ['**/*'], dest: 'build/fonts/bootstrap'},
		  
		],
	  },
},
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'transform']);
  grunt.registerTask('transform', 'Transform every html page using template.html', function() {
	  var template = fs.readFileSync('template/template.html', 'utf-8');
	  console.log(template); 
  });
};
