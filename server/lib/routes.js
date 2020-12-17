const express = require('express');
const jobs = require('./controllers/jobs');
const projects = require('./controllers/projects');
const interests = require('./controllers/interests');

let routes = express.Router();

routes.route('/jobs')
  .get(jobs.root)

routes.route('/jobs/:name')
  .get(jobs.byName)

routes.route('/projects')
  .get(projects.root)

routes.route('/projects/:name')
  .get(projects.byName)

routes.route('/interests')
  .get(interests.root)

routes.route('/interests/:name')
  .get(interests.byName)

module.exports = routes;
