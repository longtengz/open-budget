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
for (var idx = 0; idx < 20; idx++) {
    fund = new Fund({item: 'item' + idx,
                    fcoa: "fcoa",
                    anticipated: 2000 + idx,
                    realized: 1000 + idx,
                    year: 2015 + idx
                    });

    fund.save(function(err, fund) {
        if (err) return console.error(err);

        //console.log('yeah, we just saved to the db.');
    });
}
*/






//Fund.remove({year: {$gt: 0}}, function (err) {
  //  console.log(err);
//});

//Fund.find({item: /^item/}, function (err, funds) {
//    console.log(funds);
//});


