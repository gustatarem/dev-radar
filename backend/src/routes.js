const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello omnistack' });
});

routes.post('/devs', async (req, res) => {
  const { github_username, techs } = req.body;

  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

  const { name = login, avatar_url, bio } = apiResponse.data;

  const techsArray = techs.split(',').map(tech => tech.trim());

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
  });

  console.log(name, avatar_url, bio, github_username, techsArray);

  return res.json(dev);
})

module.exports = routes;