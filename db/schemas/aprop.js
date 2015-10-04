var mongoose = require('mongoose');

var ApropSchema = new mongoose.Schema({
    item: String,
    type: {type: Number, ref: 'Type'},
    subtype: {type: Number, ref: 'Subitem'}, // salaries and wages & other expenses
    emgc: Number, // emergency appropriation
    mod: Number, // modified by all transfers
    paid: Number, // paid or charged
    rsrv: Number, // reserved
    fcoa: String,
    year: Number
});

module.exports = ApropSchema;
