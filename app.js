var express = require("express");
var mongoose = require('mongoose');

var app = express();

var db_url = "mongodb://10.240.0.2:80/open-budget";


var Revenue = require('./db/models/revenue');
var Aprop = require('./db/models/aprop');
var Subitem = require('./db/models/subitem');
var Type = require('./db/models/type');

mongoose.connect(db_url);

app.set('view engine', 'jade');

app.get('/appropriation/', function (req, res) {
    var  obj = {};

    paid_max = parseFloat(req.query.pm);
    paid_min = parseFloat(req.query.pn);


    if (!isNaN(paid_max) || !isNaN(paid_min)) {
        obj.paid = {};

        if (!isNaN(paid_max)) {
            obj.anticipated.$lt = anti_max;
        }

        if (!isNaN(anti_min)) {
            obj.anticipated.$gt = anti_min;
        }
    }
});


// url: /search/?a=1&b=2
app.get('/get_budget/', function (req, res) {
    var anti_max, anti_min,
        real_max, real_min, fcoa, year_max, year_min;

    var obj = {};

    if (req.query.item != undefined) {
        obj.item = new RegExp(req.query.item);
    }

    anti_max = parseFloat(req.query.am);
    anti_min = parseFloat(req.query.an);


    if (!isNaN(anti_max) || !isNaN(anti_min)) {
        obj.anticipated = {};

        if (!isNaN(anti_max)) {
            obj.anticipated.$lt = anti_max;
        }

        if (!isNaN(anti_min)) {
            obj.anticipated.$gt = anti_min;
        }
    }

    real_max = parseFloat(req.query.rm);
    real_min = parseFloat(req.query.rn);

    if (!isNaN(real_max) || !isNaN(real_min)) {
        obj.realized = {};

        if (!isNaN(real_max)) {
            obj.realized.$lt = real_max;
        }

        if (!isNaN(real_min)) {
            obj.realized.$gt = real_min;
        }
    }

    if (req.query.fcoa != undefined) {
        obj.fcoa = new RegExp(req.query.fcoa);
    }

    year_max = parseInt(req.query.ym);
    year_min = parseInt(req.query.yn);

    if (!isNaN(year_max) || !isNaN(year_min)) {
        obj.year = {};

        if (!isNaN(year_max)) {
            obj.year.$lt = year_max;
        }

        if (!isNaN(year_min)) {
            obj.year.$gt = year_min;
        }
    }


    Revenue.find(obj).populate('type').exec(function (err, revs) {
                    res.type('json');
                    res.json({data: revs});
               });;
});

app.get('/budget/', function (req, res) {
    res.render('budget');
});

app.get('/', function (req, res) {
    res.render('index', { title: 'Home', message: 'New Brunswick Financial Data Visualization'});
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(8080, "10.240.0.3", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/about', function (req, res) {
    res.render('about');
});



