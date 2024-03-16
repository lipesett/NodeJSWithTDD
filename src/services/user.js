module.exports = (app) => {
    const getAll = () => {
        return app.db('users').select();
    };

    const create = async (user) => {
        return app.db('users').insert(user, '*');
    };

    return { getAll, create }
};