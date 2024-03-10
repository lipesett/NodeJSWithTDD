// ALL TESTS RELATED TO THE APP WILL BE HERE!
const request = require('supertest');

const app = require('../src/app.js');

/* 
THE SUPERTEST MUST BUILD THE APP AND SERVER;
FIRST WE MUST MAKE A REQUEST TO THE SERVER;
AFTERWARD, WE MUST CATCH THE RESPONSE STATUS CODE;
IN THE END, WE MUST COMPARE THE RETURN WITH OUR EXPECT;
 */
test('Must response at the root', () => {
    return request(app).get('/')
        .then(res => {
            expect(res.statusCode).toBe(200);
        });
});