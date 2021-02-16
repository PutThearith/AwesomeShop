const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    name: {type: String},
    descrpition: {type: String},
    imagePath: {type: String},
    clickButton: {type: String}
}, {
    timestamps: true,
})

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;