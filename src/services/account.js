module.exports = (app) => {
    const create = (account) => {
        return app.db('accounts').insert(account, '*');
    };

    return { create }
};