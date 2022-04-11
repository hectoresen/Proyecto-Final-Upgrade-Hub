const express = require('express');
const WomensProducts = require('../models/WomensProducts');
const router = express.Router();
const { isAdmin } = require('../middlewares/auth.middleware');

router.get('/woman', async(req, res, next) =>{
    try{
        const results = await WomensProducts.find();
        return res.status(200).json(results);
    }catch(error){
        return next(error);
    }
});

router.post('/woman', async(req, res, next) =>{
    try{
        const {title, description, price, stock, shoppingFrom, image, rating, categorie, filter} = req.body;
        const newWomanProduct = new WomensProducts({
            title,
            description,
            price,
            stock,
            shoppingFrom,
            rating,
            categorie,
            image,
            filter
        });
        const womanProductCreated = await newWomanProduct.save();
        return res.status(201).json(womanProductCreated);
    }catch(error){
        return next(error);
    }
});

router.delete('woman/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        await WomensProducts.findByIdAndDelete(id);
        return res.status(200).json('Producto de mujer eliminado');
    }catch(error){
        return next(error);
    }
})

router.put('/woman/edit/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        const {stock} = req.body;
        const newAccessory = await WomensProducts.findByIdAndUpdate(id,{$set:{stock: stock}});
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});

router.put('/woman/delete/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        console.log(id);
        const newAccessory = await WomensProducts.findByIdAndDelete(id);
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});

module.exports = router;