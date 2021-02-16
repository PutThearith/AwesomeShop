const router = require('express').Router();
const Product = require('../models/products.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const imagePath = req.body.imagePath;
    const price = number(req.body.price);
    const discount = number(req.body.discount);
    const amountInStock = number(req.body.amountInStock);
    const newProduct = new Product({name, description, imagePath, price, discount, amountInStock});

    newProduct.save()
    .then(() => res.json('Product Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;