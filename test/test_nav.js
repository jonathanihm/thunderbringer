var assert = require('assert');
var cheerio = require('cheerio');
var fs = require('fs');
var thunder = require('../src/thunderbringer.js');

describe('Navigation', function() {
    describe('#alreadyHasBs', function() {
		it("should return 1 if nav element is found", function() {
			var template = fs.readFileSync('nav_tests.html', 'utf-8');
			const $ = cheerio.load(template);
			assert.equal(1, thunder.findNav($('#twbs')).length);
		});
	});
	describe('#alreadyHasNav', function() {
		it("should return 1 if a div nav is found", function() {
			var template = fs.readFileSync('nav_tests.html', 'utf-8');
			const $ = cheerio.load(template);
			assert.equal(1, thunder.findNav($('#nav-no-bs')).length);
		});
	});
});