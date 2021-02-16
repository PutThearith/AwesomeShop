const router = require('express').Router();
let User = require('../models/user.model');
const { getToken } = require('../util');

router.get('/createadmin', async (req, res) =>{
    try{
        const user = new User({
            username: 'Rith',
            email: 'putthearith123@gmail.com',
            password: '13579',
            isAdmin: true
        });
        const newUser = await user.save();
        res.send(newUser);
    }catch(error){
        res.send({msg:error.message})
    }

})

router.post ('/signin', async (req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if(signinUser){
        res.send({
            _id: signinUser.id,
            username: signinUser.username,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
    }else{
        res.status(401).send({msg: "Invalid Email or Password."});
    }

})

router.post('/register', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    const newUser = await User.save()
    if (newUser) {
        res.send({
            _id: signinUser.id,
            username: newUser.username,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    }else{
        res.status(401).send({msg: "Invalid Input Data"});
    }

})


module.exports = router;