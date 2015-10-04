var mongoose = require('mongoose');
var Fund = require('./models/fund');

var database_url = "mongodb://10.240.0.2:80/open-budget";


mongoose.connect(database_url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

for (var idx = 0; idx < 20; idx++) {
    fund = new Fund({item: 'item' + idx,
                    fcoa: "fcoa",
                    anticipated: 2000 + idx,
                    realized: 1000 + idx,
                    year: 2015 + idx
                    });

    fund.save(function(err, fund) {
        if (err) return console.error(err);

        console.log('yeah, we just saved to the db.');
    });
}



// add items here


Fund.find({item: /^item/}, function (err, funds) {
    console.log(funds);
});


