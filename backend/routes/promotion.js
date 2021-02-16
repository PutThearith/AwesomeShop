const router = require('express').Router();
let Promotion = require('../models/promotions.model');

router.route('/').get((req, res) => {
    Promotion.find()
    .then(promotions => res.json(promotions))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  
    const name = req.body.name;
    const description = req.body.description;
    const imagePath = req.body.imagePath;
    const clickButton = req.body.clickButton;
    const newPromotion = new Promotion({
        name, 
        description, 
        imagePath, 
        clickButton
    });
    newPromotion.save()
    .then(() => res.json('Promotion Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;