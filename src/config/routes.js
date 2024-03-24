/*
HERE WE SEE HOW EASY IT WILL BE TO EXPORT NEW ROUTES
FROM THE FILE 'USERS' WHEN THEY ARE CREATED.
*/
module.exports = (app) => {
    app.route('/users')
        .get(app.routes.users.getAll)
        .post(app.routes.users.create);

    app.route('/accounts')
        .post(app.routes.accounts.create);
}