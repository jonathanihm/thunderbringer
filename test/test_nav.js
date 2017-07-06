var assert = require('assert');
var cheerio = require('cheerio');
var fs = require('fs');
var template = fs.readFileSync('test/nav_tests.html', 'utf-8');
var thunder = require('../src/thunderbringer.js');
const $ = cheerio.load(template);

describe('Navigation', function() {
    describe('Custom Navigation', function() {
		it("should find navigation element defined from config selector", function() {
			assert.equal(1, thunder.findNav($('#custom-nav-class')).length);
		});
	});
    describe('Twitter Bootstrap Navigation', function() {
		it("should find a main bootstrap nav element", function() {
			assert.equal(1, thunder.findNav($('#twbs')).length);
		});
	});
	describe('Plain nav element without bootstrap', function() {
		it("should find a plain nav element without bootstrap classes", function() {
			assert.equal(1, thunder.findNav($('#nav-no-bs')).length);
		});
	});
	describe('Any element containing nav with nav class', function() {
		it("should find a div with nav class", function() {
			assert.equal(1, thunder.findNav($('#anything-like-nav')).length);
		});
	});
	describe('Any element containing nav with navigation class', function() {
		it("should find a div with navigation class", function() {
			assert.equal(1, thunder.findNav($('#anything-like-nav2')).length);
		});
	});
});