import express from 'express';
import data from './data';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyPaser from 'body-parser';

const app =  express();
app.use(cors());
app.use(express.json());
app.use(bodyPaser.json());

mongoose.connect('mongodb+srv://MrBrekker:Kaz12345@cluster0.forzv.mongodb.net/<dbname>?retryWrites=true&w=majority',  { useNewUrlParser: true,  useUnifiedTopology: true  })
.then(result => {
    console.log("DB is connected");
}).catch(err => {
    console.log(err);
});

app.get("/api/products/:id", (req, res) => {
    console.log(req.params.id);
    const product = data.products.find( p => p._id === req.params.id);

;    if(product){
        res.send(product);
    }else{
        res.status(404).send({ msg: "Product Not Found"});
    }
});


app.get("/api/products", (req, res) => {
    res.send(data.products);
});


const productRouter = require('./routes/products');
const promotionRouter = require('./routes/promotion');
const userRouter = require('./routes/users');

app.use('/api/promotions', promotionRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);



app.listen(5000, () => {
    console.log("Server staring at http://localhost:5000");
})