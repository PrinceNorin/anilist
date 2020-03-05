const animes = require('./animes/animes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(animes);
};
