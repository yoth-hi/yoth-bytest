"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/login', '/results', '/signup', '/chat'],
        },
        sitemap: 'https://yoth-hi.vercel.app/sitemap.xml',
    };
}
exports.default = robots;
