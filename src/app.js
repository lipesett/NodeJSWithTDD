const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send();
});

app.get('/users', (req, res) => {
    const users = [
        {
            "name": "Felipe Lucas",
            "email": "felipe@email.com"
        }
    ];
    res.status(200).json(users);
});

module.exports = app;