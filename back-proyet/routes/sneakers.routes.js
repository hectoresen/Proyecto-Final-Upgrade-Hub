const express = require('express');
const SneakersModel = require('../models/Sneakers');
const router = express.Router();
const { isAdmin } = require('../middlewares/auth.middleware');

router.get('/sneakers', async(req, res, next) =>{
    try{
        const results = await SneakersModel.find();
        return res.status(200).json(results);
    }catch(error){
        return next(error);
    }
});

router.post('/sneakers', async (req, res, next) =>{
    try{
        const {title, description, price, stock, shoppingFrom, image, rating, categorie, subcategorie, filter} = req.body;
        const newSneakers = new SneakersModel({
            title,
            description,
            price,
            stock,
            shoppingFrom,
            image,
            rating,
            categorie,
            subcategorie,
            filter
        })
        const sneakersCreated = await newSneakers.save();
        return res.status(201).json(sneakersCreated);
    } catch(error){
        return next(error);
    }
})


router.delete('/sneakers/:id', async(req, res, next) =>{
    try{
        const {id} = req.params;
        await SneakersModel.findByIdAndDelete(id);
        return res.status(200).json('Zapatilla eliminada');
    }catch(error){
        return next(error);
    }
})


router.put('/sneakers/edit/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        const {stock} = req.body;
        const newAccessory = await SneakersModel.findByIdAndUpdate(id,{$set:{stock: stock}});
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});


router.put('/sneakers/delete/:id', [isAdmin], async(req, res, next) => {
    try{
        const {id} = req.params;
        console.log(id);
        const newAccessory = await SneakersModel.findByIdAndDelete(id);
        return res.status(200).json(newAccessory);
        }catch(error){
            return next(error);
        }
});



module.exports = router;