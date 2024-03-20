module.exports = (app) => {
    const getAll = () => {
        return app.db('users').select();
    };

    const create = async (user) => {
        if (!user.name) return { error: 'Name is required' };
        if (!user.email) return { error: 'Email is required' };
        return app.db('users').insert(user, '*');
    };

    return { getAll, create }
};