
var fs = require('fs');



var mongoose = require('mongoose');
var Revenue = require('./models/revenue');
var Subitem = require('./models/subitem');
var Type = require('./models/type');
var Aprop = require('./models/aprop');

var database_url = "mongodb://10.240.0.2:80/open-budget";

mongoose.connect(database_url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

/*
16 for (var idx = 0; idx < 20; idx++) {
17     fund = new Fund({item: 'item' + idx,
18                     fcoa: "fcoa",
19                     anticipated: 2000 + idx,
20                     realized: 1000 + idx,
21                     year: 2015 + idx
22                     });
23
24     fund.save(function(err, fund) {
25         if (err) return console.error(err);
26
27         //console.log('yeah, we just saved to the db.');
28     });
29 }
30 */

function cb(err) {
    console.log('yeah, saved');
}


fs.readFile('./subitems.json', 'utf8', function (err, data) {
    var obj = JSON.parse(data);

    var sub;

    for (var idx = 0; idx < obj.data.length; idx++) {
        sub = new Subitem(obj.data[idx]);

        sub.save(cb);
    }

});

fs.readFile('./types.json', 'utf8', function (err, data) {
    var obj = JSON.parse(data);

    var ty;

    for (var idx = 0; idx < obj.data.length; idx++) {
        ty = new Type(obj.data[idx]);

        ty.save(cb);
    }

});
