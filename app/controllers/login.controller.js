const mysql = require("../mysql/mysql").pool;
const bcrypt = require("bcrypt-nodejs");

exports.attemptLogin = function (req, res) {
    if (req.body.username && req.body.password) {
        const username = req.body.username;
        const password = req.body.password;
        mysql.getConnection(function (error, connection) {
            if (error) {
                res.send(error);
            } else {
                connection.query('select password_hash from user where name = ?', [username], function (error, result) {
                    if (error) {
                        res.send(error);
                    } else {
                        if (Array.isArray(result) && result.length > 0) {
                            hash = result[0].password_hash;
                            bcrypt.compare(password, hash, function (error, result) {
                                if (error) {
                                    console.log(hash);
                                    res.send(error);
                                } else {
                                    if (result == true) {
                                        res.send({status: "success"});
                                    } else {
                                        res.send({status: "failed"});
                                    }
                                }
                            });
                        }
                        else {
                            res.send({error: "Something went wrong"});

                        }
                    }
                });
            }
        });
    } else {
        res.send({error: "Something went wrong"});
    }
};