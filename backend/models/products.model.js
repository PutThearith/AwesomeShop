const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    imagePath: { type: String },
    price: { type: Number, required: true },
    discount: {type: Number},
    amountInStock: { type: Number}
}, {
    timestamps: true,
})

const Products = mongoose.model('Product', productSchema);
module.export = Products;