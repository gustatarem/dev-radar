const { Router } = require('express');
const DevController = require('./controllers/DevController')

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello omnistack' });
});

routes.post('/devs', DevController.store);

module.exports = routes;