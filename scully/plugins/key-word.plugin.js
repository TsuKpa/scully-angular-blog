"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
function keywordPlugin(route, config = {}) {
    return Promise.resolve([
        { route: '/tags/CI%2FCD' },
        { route: '/tags/Angular' },
        { route: '/tags/tutorial' },
    ]);
}
const validator = async (conf) => [];
scully_1.registerPlugin('router', 'keywords', keywordPlugin, validator);
//# sourceMappingURL=key-word.plugin.js.map