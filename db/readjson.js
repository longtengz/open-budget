
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


fs.readFile('./data.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);

    var revenues = [];

    var index = 0;

    var item, fcoa, anti, real, type;
    for (var idx = 0; idx < obj.Revenues.length; idx++) {

        item = obj.Revenues[idx].Item.trim().replace(':', '');
        fcoa = obj.Revenues[idx]["FCOA"];

        if (fcoa != undefined) {
            fcoa = fcoa.trim();
        } else {
            fcoa = "";
        }


        type = parseInt(obj.Revenues[idx].type);

        anti = parseFloat(obj.Revenues[idx]['2014 Anticipated'] || -1);
        real = parseFloat(obj.Revenues[idx]['2014 Realized'] || -1);

        revenues[index++] = {
            item: item,
            fcoa: fcoa,
            anticipated: anti,
            realized: real,
            year: 2014,
            type: type
        }

        anti = parseFloat(obj.Revenues[idx]['2015 Anticipated'] || -1);
        real = parseFloat(obj.Revenues[idx]['2015 Realized'] || -1);
        // -1 indicates not spcified


        revenues[index++] = {
            item: item,
            fcoa: fcoa,
            anticipated: anti,
            realized: real,
            year: 2015,
            type: type
        }
    }

    // console.log(revenues);


    var aprops = [];

    var index = 0;

    var foca, aprop, rsrv, paid, mod, emgc, subitem;
    for (var idx = 0; idx < obj.Appropriations.length; idx++) {

        item = obj.Appropriations[idx].Item.trim().replace(':', '');
        foca = obj.Appropriations[idx]["FOCA"];

        if (foca != undefined) {
            foca = foca.trim();
        } else {
            foca = "";
        }

        type = parseInt(obj.Appropriations[idx].type);


        subitem = parseInt(obj.Appropriations[idx].subitem || -1);

        rsrv = parseFloat(obj.Appropriations[idx]['2014 reserved'] || -1);
        paid = parseFloat(obj.Appropriations[idx]['2014 paid'] || -1);
        mod = parseFloat(obj.Appropriations[idx]['2014 mod'] || -1);
        emgc = parseFloat(obj.Appropriations[idx]['2014 emgc'] || -1);

        aprop = parseFloat(obj.Appropriations[idx]["2014 "]);

        aprops[index++] = {
            item: item,
            fcoa: foca,
            rsrv: rsrv,
            mod: mod,
            paid: paid,
            emgc: emgc,
            subitem: subitem,
            year: 2014,
            type: type
        }

        aprop = parseFloat(obj.Appropriations[idx]["2015 "]);


        aprops[index++] = {
            item: item,
            fcoa: foca,
            rsrv: rsrv,
            mod: mod,
            paid: paid,
            emgc: emgc,
            subitem: subitem,
            year: 2014,
            type: type
        }

    }

    // console.log(aprops);

    var rev, apr;

    for (var idx = 0; idx < revenues.length; idx++) {
        rev = new Revenue(revenues[idx]);

        rev.save(cb);
    }

    for (var idx = 0; idx < aprops; idx++) {
        apr = new Aprop(aprops[idx]);

        apr.save(cb);
    }

});
