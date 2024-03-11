module.exports = () => {
    // TODO GETALL-method refactory this test after DB connection
    // GET ALL USERS
    const getAll = (req, res) => {
        const users = [
            {
                "name": "Felipe Lucas",
                "email": "felipe@email.com"
            }
        ];
        res.status(200).json(users);
    };

    // POST USER
    const create = (req, res) => {
        res.status(201).json(req.body);
    };

    return { getAll, create }
};
