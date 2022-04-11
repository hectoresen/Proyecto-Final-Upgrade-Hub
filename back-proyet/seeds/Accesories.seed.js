const mongoose = require('mongoose');
const {
    DB_URL,
    CONFIG_DB
} = require('../config/db');
const AccessoriesModel = require('../models/Accessories');


const accesoriesArray = [{
    "title": "Pañuelo Lino Liso",
    "description": "Pañuelo confeccionado en lino 100%. Acabado deshilachado.",
    "price": 19.95,
    "stock": 5,
    "shoppingFrom": "España",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/3920/042/802/2/w/1126/3920042802_6_1_1.jpg?ts=1645697629862",
    "rating": 4,
    "categorie": "Complementos",
    "filter": "Pañuelo"
},
{
    "title": "Pañuelo Lino Cuadros",
    "description": "Pañuelo confeccionado en lino 100%. Acabado en cuadros.",
    "price": 19.95,
    "stock": 10,
    "shoppingFrom": "España",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/0653/027/670/2/w/2850/0653027670_6_1_1.jpg?ts=1645697623416",
    "rating": 3,
    "categorie": "Complementos",
    "filter": "Pañuelo"
},
{
    "title": "Pendientes Margaritas",
    "description": "Pendientes con forma de margarita con detalle de abalorios. Cierre con tuerca.",
    "price": 10.95,
    "stock": 4,
    "shoppingFrom": "Italia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/4548/037/050/2/w/1126/4548037050_6_1_1.jpg?ts=1645700139825",
    "rating": 5,
    "categorie": "Complementos",
    "filter": "Pendientes"
},
{
    "title": "Pendientes flores",
    "description": "Pendientes con forma de flor con abalorios de colores.",
    "price": 10.95,
    "stock": 9,
    "shoppingFrom": "Italia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/4548/038/615/2/w/1126/4548038615_6_1_1.jpg?ts=1645700141572",
    "rating": 4,
    "categorie": "Complementos",
    "filter": "Pendientes"
},
{
    "title": "Collar Birth Collection",
    "description": "Collar fino en plata de lino, con piedra de color.",
    "price": 15.95,
    "stock": 10,
    "shoppingFrom": "Italia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/2621/001/400/2/w/1126/2621001400_15_1_1.jpg?ts=1645715309768",
    "rating": 4,
    "categorie": "Complementos",
    "filter": "Collar"
},
{
    "title": "Collar Abalorios",
    "description": "Collar fino con abalorios de colores.",
    "price": 15.95,
    "stock": 3,
    "shoppingFrom": "Italia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/4736/077/330/2/w/1126/4736077330_6_1_1.jpg?ts=1645085686774",
    "rating": 5,
    "categorie": "Complementos",
    "filter": "Collar"
},
{
    "title": "Brazalete Flores",
    "description": "Brazalete color dorado con motivos florales.",
    "price": 9.95,
    "stock": 15,
    "shoppingFrom": "Suiza",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/1124/002/303/2/w/1126/1124002303_6_2_1.jpg?ts=1644855919055",
    "rating": 5,
    "categorie": "Complementos",
    "filter": "Brazalete"
},
{
    "title": "Cituron piel resina",
    "description": "Cinturón realizado en piel con hebilla en resina.",
    "price": 22.95,
    "stock": 8,
    "shoppingFrom": "Francia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/6399/010/700/2/w/1126/6399010700_6_1_1.jpg?ts=1645446861318",
    "rating": 4,
    "categorie": "Complementos",
    "filter": "Cinturon"
},
{
    "title": "Cinturón básico",
    "description": "Cinturón básico en piel sintética de color negro",
    "price": 22.95,
    "stock": 10,
    "shoppingFrom": "Italia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/2555/006/800/2/w/1126/2555006800_6_1_1.jpg?ts=1643295087848",
    "rating": 5,
    "categorie": "Complementos",
    "filter": "Cinturon"
},
{
    "title": "Cinturón Combinado Maxi Hebilla",
    "description": "Cinturón combinado con costura marcada y maxi hebilla redonda.",
    "price": 25.95,
    "stock": 10,
    "shoppingFrom": "Italia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/2495/007/800/2/w/1126/2495007800_6_3_1.jpg?ts=1644839016806",
    "rating": 5,
    "categorie": "Complementos",
    "filter": "Cinturon"
},

{
    "title": "Gorro Marinero Negro",
    "description": "Gorra tipo marinera con visera rigida.",
    "price": 16.95,
    "stock": 9,
    "shoppingFrom": "Francia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/0653/038/800/2/w/1126/0653038800_6_1_1.jpg?ts=1644573950832",
    "rating": 3,
    "categorie": "Complementos",
    "filter": "Gorro"
},
{
    "title": "Gorro marinero beige",
    "description": "Gorra tipo marinera con visera rigida.",
    "price": 16.95,
    "stock": 2,
    "shoppingFrom": "Francia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/0653/038/712/2/w/1126/0653038712_6_2_1.jpg?ts=1644573947264",
    "rating": 4,
    "categorie": "Complementos",
    "filter": "Gorro"
},
{
    "title": "Sombrero Fieltro",
    "description": "Sombrero de fieltro con ala ancha y cinta combinada a contraste.",
    "price": 18.95,
    "stock": 6,
    "shoppingFrom": "Francia",
    "image": "https://static.zara.net/photos///2022/V/0/1/p/3920/024/707/2/w/2850/3920024707_6_1_1.jpg?ts=1641548400998",
    "rating": 5,
    "categorie": "Complementos",
    "filter": "Gorro"
},
{
    "title": "Boina Lana",
    "description": "Boina confeccionada con lana.",
    "price": 10.95,
    "stock": 2,
    "shoppingFrom": "Francia",
    "image": "https://static.zara.net/photos///2021/I/0/1/p/3739/214/800/2/w/1126/3739214800_6_1_1.jpg?ts=1631029842750",
    "rating": 4,
    "categorie": "Complementos",
    "filter" : "Gorro"
}]

const URL = "mongodb://localhost:27017/ecomerce";

mongoose.connect(URL, CONFIG_DB)
    .then(async () =>{
        const accesoriesContent = await AccessoriesModel.find();
        (accesoriesContent.length) ? await AccessoriesModel.collection.drop() : '';
    })
    .catch(error => console.log("Error buscando en la DB", error))
    .then(async () =>{
        await AccessoriesModel.insertMany(accesoriesArray);
    })
    .catch(error => console.log('Error añadiendo accesorios'))
    .finally(() => mongoose.disconnect());