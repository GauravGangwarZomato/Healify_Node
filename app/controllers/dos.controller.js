const mysql = require('../mysql/mysql').pool;

exports.getDosAndDontsForMedicalCondition = function(req,res){
    mysql.getConnection(function (error,connection) {
        if(error){
            res.send(error);
        }else if(req.params.mc_id){
            connection.query('select * from dos_donts where id in (select dos_id from mc_dos_pivot where mc_id in (select id from medical_condition where id = ?));',req.params.mc_id,function(error,result){
                if(error){
                    res.send(error);
                }else{
                    res.send(result);
                }
            });
        }else{
            res.send({"error":"Medical Condition ID Not Specified"});
        }
    });
}