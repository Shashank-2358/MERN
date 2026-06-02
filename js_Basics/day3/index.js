/**
 * Many tools default to running index.js (Run button, Code Runner, etc.).
 * This file forwards to app.js so the middleware lesson is what runs by default.
 * For the routing-only demo: npm run demo:routes
 */
require('./app.js');
