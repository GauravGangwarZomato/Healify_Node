const express = require('express');
const bodyParser = require('body-parser');

module.exports = function () {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    require('../app/routes/index.route')(app);
    require('../app/routes/signup.route')(app);
    require('../app/routes/login.route')(app);
    require('../app/routes/medicalCondition.route')(app);
    require('../app/routes/dos.route')(app);
    require('../app/routes/suggestion.route')(app);

    return app;

};
