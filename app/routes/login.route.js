module.exports = function (app) {

    const login = require("../controllers/login.controller");
    app.post("/login",login.attemptLogin);

};