const assert = require('assert');
const app = require('../../src/app');

describe('\'animes\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/animes');

    assert.ok(service, 'Registered the service');
  });
});
