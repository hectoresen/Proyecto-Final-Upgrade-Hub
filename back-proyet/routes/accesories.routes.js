const { Router } = require('express');
const express = require('express');
const { isAdmin } = require('../middlewares/auth.middleware');
const AccessoriesModel = require('../models/Accessories');
const router = express.Router();


router.get('/accessories', async(req, res, next) =>{
    try{
        const results = await AccessoriesModel.find();
        return res.status(200).json(results);
    } catch(error){
        return next(error);
    }
});

router.post('/accessories', async (req, res, next) =>{
    try{
        const {title, description, price, stock, shoppingFrom, image, rating, categorie, filter} = req.body;
        const newAccessory = new AccessoriesModel({
            title,
            description,
            price,
            stock,
            shoppingFrom,
            rating,
            categorie,
            image,
            filter,
        });
        const accessoryCreated = await newAccessory.save();
        return res.status(201).json(accessoryCreated);
    }catch(error){
        return next(error);
    }
})

router.delete('/accessories/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        await AccessoriesModel.findByIdAndDelete(id);
        return res.status(200).json('Accesorio eliminado');
    }catch(error){
        return next(error);
    }
})

router.put('/accessories/edit/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        const {stock} = req.body;
        const newAccessory = await AccessoriesModel.findByIdAndUpdate(id,{$set:{stock: stock}});
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});

router.put('/accessories/delete/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        console.log(id);
        const newAccessory = await AccessoriesModel.findByIdAndDelete(id);
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});


module.exports = router;