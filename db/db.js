var MongoClient = require("mongodb").MongoClient;

var assert = require("assert");


var url = 'mongodb://10.240.0.2:80/open-budget';


MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    console.log("Connected correctly to server.");

    db.close();
});
