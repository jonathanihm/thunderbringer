const cheerio = require('cheerio');

module.exports = {
	findNav: function($root, config) {
	    console.log(config);
//	    Order of precedence
//	    1. config file
//      2. twitter bootstrap navbar class
//      3. nav element
//	    4. any element with a class like nav

        // TODO: support multiple navigation menus

        /// use custom selector from config first
        if (config && config.defaults) {
            var nav = $root.find(config.defaults.navMain);
            console.log(config.defaults.navMain + " " + nav.length);
            var tmp = this.results(nav);
            if (tmp !== null) {
                return nav;
            }
        }

        // standard twitter navbar element
        nav = $root.find('nav.navbar');
        tmp = this.results(nav);
        if (tmp !== null) {
            return nav;
        }

        // other nav element
        nav = $root.find('nav');
        tmp = this.results(nav);
        if (tmp !== null) {
            return nav;
        }

        // return anything with a class like nav
        nav = $root.find("[class*=nav], [class~='nav']");
        tmp = this.results(nav);
        if (tmp !== null) {
            return nav;
        }

	},
	
	findFooter: function($root, config) {
//	    Easier to detect presence of footer, either a footer element
//	    or its an element with a class that contains footer

//	    Order of precedence
//	    1. config file
//      2. footer element
//      3. element with footer-like class

        if (config && config.defaults) {
            var footer = $root.find(config.defaults.footer);
            var tmp = this.results(footer);
            if (tmp !== null) {
                return footer;
            }
        }
        // standard twitter navbar element
        footer = $root.find('footer');
        tmp = this.results(footer);
        if (tmp !== null) {
            return footer;
        }
        
        // return anything with a class like nav
        nav = $root.find("[class*=footer], [class~='footer']");
        tmp = this.results(nav);
        if (tmp !== null) {
            return nav;
        }
	    
    },

    results: function(nav) {
        if (nav && nav.length === 1) {
            return nav;
        } else {
            return null;
        }
    }
};
