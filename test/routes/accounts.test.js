const request = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/accounts';
let user;

beforeAll(async () => {
    const res = await app.services.user.create({
        name: 'User account',
        email: `${Date.now()}@email.com`,
        password: '123456'
    });
    user = { ...res[0] };
});

test('Must insert an account successfully', () => {
    return request(app).post(MAIN_ROUTE)
        .send({ name: 'Acc #1', user_id: user.id })
        .then(res => {
            expect(res.statusCode).toBe(201);
            expect(res.body.name).toBe('Acc #1');
        });
});