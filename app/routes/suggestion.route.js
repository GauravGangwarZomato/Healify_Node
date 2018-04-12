module.exports = function (app) {

    const controller = require("../controllers/suggestion.controller");
    app.get("/suggestion/:mc_id",controller.getSuggestionsForMedicalCondition);

};