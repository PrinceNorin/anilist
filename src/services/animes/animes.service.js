// Initializes the `animes` service on path `/api/animes`
const { Animes } = require('./animes.class');
const createModel = require('../../models/animes.model');
const hooks = require('./animes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/animes', new Animes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/animes');

  service.hooks(hooks);
};
