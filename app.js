var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.get('/', function (req, res) {
  res.render('index', { title: 'Home', message: 'Hello there!'});          //
});
app.use(express.static(__dirname + '/public'));                           //
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
