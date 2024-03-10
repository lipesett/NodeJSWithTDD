// ALL TESTS RELATED TO THE USERS WILL BE HERE!
const request = require('supertest');

const app = require('../src/app');

/* 
WE MUST RETURN ALL USERS;
FIRST WE MUST MAKE A REQUEST FOR THE ROUTE '/users';
WE MUST CAPTURE AND COMPARE THE 'statusCode' OF THE RESPONSE;
WE MUST CHECK THE SIZE OF THE ARRAY;
WE MUST CHECK IF THE RESPONSE BODY CONTAINS THE PROPERTY
"name" WITH VALUE "Felipe Lucas";
 */
test('Must get all users', () => {
    return request(app).get('/users')
        .then(res => {
            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty("name", "Felipe Lucas")
        });
});