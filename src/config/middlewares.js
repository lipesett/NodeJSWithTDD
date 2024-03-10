const bodyParser = require('body-parser');

// EXECUTING BODY-PARSER
module.exports = (app) => {
    app.use(bodyParser.json());
};
