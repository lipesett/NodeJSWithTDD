module.exports = {
    test: {
        client: 'pg',
        version: '9.6',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '1337',
            database: 'nodewithtdd'
        },
        migrations: {
            directory: 'src/migrations'
        }
    }
}