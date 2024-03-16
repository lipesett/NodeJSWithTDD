const app = require('express')();
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile')
const knexLogger = require('knex-logger');

// TODO create dynamic switching
app.db = knex(knexfile.test);
app.use(knexLogger(app.db));

consign({ cwd: 'src', verbose: false })
    .include('./config/middlewares.js')
    .then('./routes')
    .then('./config/routes.js')
    .into(app);

// HOME PAGE
app.get('/', (req, res) => {
    res.status(200).send();
});

module.exports = app;