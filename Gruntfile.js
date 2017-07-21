var fs = require('fs');
var thunder = require('./src/thunderbringer.js');
var config = require('./config.js');
const cheerio = require('cheerio');

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
	  let template = fs.readFileSync('template/template.html', 'utf-8');
	  let index = fs.readFileSync('test_website/index.html');
      let $temp = cheerio.load(template);
      let $index = cheerio.load(index);

      var nav = thunder.findNav($index(":root"), config);
      nav = thunder.processNavContents(nav);
      console.log(nav.find("ul:first-child").children());
      $temp('#bs-navbar ul').append(nav.find("ul:first-child").children());
      fs.writeFileSync("build/index.html", $temp.html());
//      console.log($temp.html());
//      console.log(navContents);
//      console.log(nav.html());
  });
};
