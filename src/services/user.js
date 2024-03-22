module.exports = (app) => {
    const getAll = (filter = {}) => {
        return app.db('users').where(filter).select();
    };

    const create = async (user) => {
        if (!user.name) return { error: 'Name is required' };
        if (!user.email) return { error: 'Email is required' };
        if (!user.password) return { error: 'Password is required' };

        const userDb = await getAll({ email: user.email });
        if (userDb && userDb.length > 0) return { error: 'There is already a user with this email' };

        return app.db('users').insert(user, '*');
    };

    return { getAll, create }
};