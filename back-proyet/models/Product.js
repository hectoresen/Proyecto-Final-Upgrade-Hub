const mongoose =require("mongoose")
//Esto es un esquema
const Schema = mongoose.Schema

const productSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number},
    shoppingFrom:{type:String},
    rating: {type: Number, required: true},
    categorie: {type: String, required: true},
    image: {type: String, required: true},
},{
    timestamps:true
})

const ProductModel = mongoose.model("Products",productSchema)

module.exports = ProductModel;