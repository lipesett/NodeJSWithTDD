const request = require('supertest');

const app = require('../src/app');

test('Must get all users', () => {
    return request(app).get('/users')
        .then(res => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty("name", "Felipe Lucas")
        });
});