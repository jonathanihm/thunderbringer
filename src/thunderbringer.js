const cheerio = require('cheerio');

module.exports = {
	findNav: function($root) {
        var nav = $root.find('nav, div.nav');
        console.log(nav);
		if ($root.find('nav, div.nav').length === 1) {
			return nav;
		}
	}
};