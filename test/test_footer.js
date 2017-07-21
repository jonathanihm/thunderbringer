var assert = require('assert');
var cheerio = require('cheerio');
var config = require('./config.js');
var fs = require('fs');
var template = fs.readFileSync('test/footer_tests.html', 'utf-8');
var thunder = require('../src/thunderbringer.js');
const $ = cheerio.load(template);

describe('Footer', function() {
    describe('Custom Footer', function() {
		it("should find navigation element defined from config selector", function() {
			assert.equal(1, thunder.findFooter($('#custom-footer-class'), config).length);
		});
	});
    describe('Twitter Bootstrap Footer or Any Footer Element', function() {
		it("should find a main bootstrap footer element", function() {
			assert.equal(1, thunder.findFooter($('#twbs')).length);
		});
	});
	describe('Any element containing nav with footer class', function() {
		it("should find a div with footer class", function() {
			assert.equal(1, thunder.findFooter($('#anything-like-footer')).length);
		});
	});
});