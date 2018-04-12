module.exports = function(app){

    const controller = require('../controllers/medicalCondition.controller');
    app.get('/medicalCondition',controller.getAllMedicalConditions);

}