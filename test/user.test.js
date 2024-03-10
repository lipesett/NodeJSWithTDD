// ALL TESTS RELATED TO THE USERS WILL BE HERE!
const request = require('supertest');
const app = require('../src/app');

/* 
TODO GETALL refactory this test after DB connection
WE MUST GET ALL USERS;
FIRST WE MUST MAKE A REQUEST FOR THE ROUTE '/users';
AS IT IS A PROMISE, WE SHOULD HANDLE IT WITH '.then';
WE MUST CAPTURE AND COMPARE THE 'statusCode' OF THE RESPONSE;
WE MUST CHECK THE SIZE OF THE ARRAY;
WE MUST CHECK IF THE RESPONSE BODY CONTAINS THE PROPERTY "name" WITH VALUE "Felipe Lucas";
 */
test('Must get all users', () => {
    return request(app).get('/users')
        .then(res => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty("name", "Felipe Lucas")
        });
});

/* 
TODO POST refactory this test after DB connection
WE MUST INSERTING A USER;
FIRST WE MUST MAKE A REQUEST FOR THE ROUTE '/users';
AFTERWARDS, WE NEED TO SEND A NEW USER;
AS IT IS A PROMISE, WE SHOULD HANDLE IT WITH '.then';
WE MUST CAPTURE AND COMPARE THE 'statusCode' OF THE RESPONSE;
WE MUST VERIFY IF THE PROPERTY "name" SENT HAS THE VALUE OF "Felipe Lucas";
 */
test('Must inserting a user', () => {
    return request(app).post('/users')
        .send({ "name": "Felipe Lucas", "email": "felipe@email.com" })
        .then(res => {
            expect(res.statusCode).toBe(201);
            expect(res.body.name).toBe("Felipe Lucas");
        })
});