// ALL TESTS RELATED TO THE SERVER WILL BE HERE
const supertest = require("supertest");

const request = supertest('http://localhost:3001');

/* 
THE SERVER MUST RESPONSE IN THE PORT 3001;
FIRST WE MUST MAKE A REQUEST TO THE SERVER;
AFTERWARD, WE MUST CATCH THE RESPONSE STATUS CODE;
IN THE END, WE MUST COMPARE THE RETURN WITH OUR EXPECT;
 */
test('Must response in the port 3001', () => {
    return request.get('/')
        .then(res => expect(res.statusCode).toBe(200));
});