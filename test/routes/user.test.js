// ALL TESTS RELATED TO THE USERS WILL BE HERE!
const request = require('supertest');
const app = require('../../src/app');

const email = `${Date.now()}@email.com`

/* 
WE MUST GET ALL USERS;
FIRST WE MUST MAKE A REQUEST FOR THE ROUTE '/users';
AS IT IS A PROMISE, WE SHOULD HANDLE IT WITH '.then';
WE MUST CAPTURE AND COMPARE THE 'statusCode' OF THE RESPONSE;
IF THE RETURN OF THE PROMISE WAS GREATER THAN 0, THEN RETURN THE VALUES;
 */
test('Must get all users', () => {
    return request(app).get('/users')
        .then(res => {
            expect(res.statusCode).toBe(200);
            expect(res.body.length).toBeGreaterThan(0);
        });
});

/* 
WE MUST INSERTING A USER;
FIRST WE CREATE THE VARIABLE 'email' TO GET THE 'Date', TO DYNAMICALLY CHANGE THE START OF THE EMAILS;
AFTERWARDS WE MUST MAKE A REQUEST FOR THE ROUTE '/users';
AFTERWARDS, WE NEED TO SEND A NEW USER;
AS IT IS A PROMISE, WE SHOULD HANDLE IT WITH '.then';
WE MUST CAPTURE AND COMPARE THE 'statusCode' OF THE RESPONSE;
WE MUST VERIFY IF THE PROPERTY "name" SENT HAS THE VALUE OF "Felipe Lucas";
 */
test('Must inserting a user', () => {
    return request(app).post('/users')
        .send({ name: "Felipe Lucas", email, "password": 123456 })
        .then(res => {
            expect(res.statusCode).toBe(201);
            expect(res.body.name).toBe("Felipe Lucas");
        })
});


//USING THE "request.then"
test('User must not be inserted without a name', () => {
    request(app).post('/users')
        .send({ email: "n@email.com", password: 123456 })
        .then(res => {
            expect(res.statusCode).toBe(400);
            expect(res.body.error).toBe('Name is required');
        });
});


//USING THE "async/await"
test('User must not be inserted without a email', async () => {
    const result = await request(app).post('/users')
        .send({ name: "Felipe Lucas", password: 123456 })
    expect(result.statusCode).toBe(400);
    expect(result.body.error).toBe('Email is required');
});

//USING THE "done()"
test('User must not be instert without a password', (done) => {
    request(app).post('/users')
        .send({ name: "Felipe Lucas", email: "felipe@email.com" })
        .then(res => {
            expect(res.statusCode).toBe(400);
            expect(res.body.error).toBe('Password is required');
            done();
        });
});

test('User must not be inserted with a repeated email', () => {
    return request(app).post('/users')
        .send({ name: "Felipe Lucas", email, "password": 123456 })
        .then(res => {
            expect(res.statusCode).toBe(400);
            expect(res.body.error).toBe("There is already a user with this email");
        })
});