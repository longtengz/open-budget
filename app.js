var express = require("express");

var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('template/index', {title: 'New Brunswick Open Budget', message: 'Hello there!'});
});


var server = app.listen(8080, "10.240.0.3", function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
