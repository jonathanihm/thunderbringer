var config = require('../config.js');
const cheerio = require('cheerio');

module.exports = {
    findNav: function($root) {
        // Order of precedence
        // 1. config file
        // 2. twitter bootstrap navbar class
        // 3. nav element
        // 4. any element with a class like nav

        // TODO: support multiple navigation menus

        // use custom selector from config first
        if (config.defaults.navMain) {
            let nav = $root.find(config.defaults.navMain);
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
    results: function(nav) {
        if (nav.length === 1) {
            return nav;
        } else {
            return null;
        }
    }
};
