const app = require('express')();
const consign = require('consign');

consign({ cwd: 'src', verbose: false })
    .include('./config/middlewares.js')
    .into(app);

// HOME PAGE
app.get('/', (req, res) => {
    res.status(200).send();
});

// GET ALL USERS
app.get('/users', (req, res) => {
    const users = [
        {
            "name": "Felipe Lucas",
            "email": "felipe@email.com"
        }
    ];
    res.status(200).json(users);
});

// POST USER
app.post('/users', (req, res) => {
    res.status(201).json(req.body);
});

module.exports = app;