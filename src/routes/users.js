module.exports = (app) => {
    // GET ALL USERS
    const getAll = (req, res) => {
        app.db('users').select()
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
        const result = await app.db('users').insert(req.body, '*');
        res.status(201).json(result[0]);
    };

    return { getAll, create }
};
