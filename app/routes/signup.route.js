module.exports = function (app) {

    const signup = require("../controllers/signup.controller");
    app.post("/signup",signup.attemptSignUp);

};