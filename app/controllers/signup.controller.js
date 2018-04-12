const mysql = require("../mysql/mysql").pool;
const bcrypt = require("bcrypt-nodejs");

exports.attemptSignUp = function (req, res) {

    mysql.getConnection(function (error, connection) {

        if (error) {
            res.send(error);
        } else {
            connection.beginTransaction(function (error) {
                if (error) {
                    return connection.rollback(function () {
                        res.send(error);
                    });
                } else {
                    const username = req.body.username;
                    const password = req.body.password;
                    if (username != undefined && username != null && password != undefined && password != null) {
                        bcrypt.hash(password,null,null,function(error,hash){
                            if (error) {
                                return connection.rollback(function () {
                                    res.send(error);
                                });
                            } else {
                                connection.query('insert into user (`name`,`password_hash`) values (?,?);',[username,hash],function(error,result){
                                    if (error) {
                                        return connection.rollback(function () {
                                            res.send(error);
                                        });
                                    } else {
                                        const userId = result.insertId;
                                        res.send({user_id : userId});
                                        connection.release();
                                    }
                                });
                            }
                        });
                    } else {
                        return connection.rollback(function(){
                            res.send({error : "Invalid Parameters"});
                        });
                    }
                }
            });
        }

    });

};

var randomTokenGenerator = function(){
    return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}