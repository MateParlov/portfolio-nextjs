const routes = require('next-routes');

// Name   Page      Pattern
module.exports = routes() // ----   ----      -----
  .add('portfolioDetails', '/portfolioDetails/:id'); // blog   blog      /blog/:slug
