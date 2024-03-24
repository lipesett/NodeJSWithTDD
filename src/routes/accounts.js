module.exports = (app) => {
    // POST USER
    const create = (req, res) => {
        app.services.account.create(req.body)
            .then(result => {
                return res.status(201).json(result[0]);
            });
    };

    return { create };
};