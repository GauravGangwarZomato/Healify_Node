const mysql = require('../mysql/mysql').pool;

exports.getAllMedicalConditions = function (req, res) {
    mysql.getConnection(function (error, connection) {
        if (error) {
            res.send(error);
        } else {
            connection.query('select * from medical_condition',function(error,result){
                if(error){
                    res.send(error);
                }else{
                    res.send(result);
                }
            });
        }
    });
};