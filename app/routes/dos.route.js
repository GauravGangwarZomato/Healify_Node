module.exports = function (app) {

    const controller = require("../controllers/dos.controller");
    app.get("/dos/:mc_id",controller.getDosAndDontsForMedicalCondition);

};