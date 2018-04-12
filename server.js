const express = require('./config/express');
var app = express();
var port = process.env.PORT || 8000;

app.listen(port,'0.0.0.0',function(){
    console.log('Healify Server up and Running on Port ' + port + '...');
});

module.exports = app;
