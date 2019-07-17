const mongoose = require('mongoose');

const DomasticSchema = new mongoose.Schema({
    nAreas: {
        type: String,
        default: ""
    },
    days: {
        type: Number,
        default: ""
    },
    nOfAdults: {
        type: Number,
        default: ""
    },
    nOfInfants: {
        type: Number,
        default: ""
    },
    budget: {
        type: Number,
        default: ""
    }
});
module.exports = mongoose.model('Domastic', DomasticSchema);
