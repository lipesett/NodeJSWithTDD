module.exports = (app) => {
    // GET ALL USERS
    const getAll = (req, res) => {
        app.services.user.getAll()
            .then(result => res.status(200).json(result))
    };

    /*
    Why convert this method to asynchronous? The POST method was made asynchronous
    because we need the result of the request, that is, the data that was inserted
    to return at the end of the method. Perhaps at another time this will be
    refactored, but for now, it will remain this way.
    */
    // POST USER
    const create = async (req, res) => {
        const result = await app.services.user.create(req.body);
        if (result.error) return res.status(400).json(result);
        res.status(201).json(result[0]);
    };

    return { getAll, create }
};
