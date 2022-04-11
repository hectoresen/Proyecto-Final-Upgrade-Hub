const mongoose = require('mongoose');
const {
    DB_URL,
    CONFIG_DB
} = require('../config/db');
const WomensProductsModel = require('../models/WomensProducts');



const womensProductsArray = [
    {
        "title": "Pantalón full fength",
        "description": "Pantalón de tiro medio con bolsillos laterales y falsos bolsillos de vivo en espalda. Detalle de pinzas marcadas en delantero. Cierre frontal con cremallera y botón",
        "price": 29.95,
        "stock": 34,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/3067/419/621/2/w/850/3067419621_15_1_1.jpg?ts=1644923612712",
        "rating": 4,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Top estructura tirante perlas",
        "description": "Top cropped de escote pico y tirantes con aplicación de perlas. Detalle de falsos botones joya. Cierre lateral con cremallera oculta en costura.",
        "price": 25.95,
        "stock": 11,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/8351/028/330/2/w/850/8351028330_2_10_1.jpg?ts=1645521930850",
        "rating": 4,
        "categorie": "Ropa para mujer",
        "filter" : "Top"
    },
    {
        "title": "Pantalón cinturón forrado",
        "description": "Pantalón de tiro alto con cinturón forrado a tono. Bolsillos delanteros y falsos bolsillos de vivo en espalda. Cierre frontal con cremallera, botón interior y gancho metálico.",
        "price": 29.95,
        "stock": 3,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4387/630/712/2/w/850/4387630712_1_1_1.jpg?ts=1643813546779",
        "rating": 3,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Falda pantalón estructura",
        "description": "Falda pantalón de tiro alto. Bajo con acabado desflecado. Cierre lateral con cremallera.",
        "price": 25.95,
        "stock": 8,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/7484/032/679/2/w/850/7484032679_6_1_1.jpg?ts=1645610603519",
        "rating": 1,
        "categorie": "Ropa para mujer",
        "filter" : "Falda"
    },
    {
        "title": "Pantalón Jacquard",
        "description": "Pantalón de tiro alto con cintura elástica. Bajo acabado flare.",
        "price": 19.95,
        "stock": 22,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/7484/032/679/2/w/850/7484032679_6_1_1.jpg?ts=1645610603519",
        "rating": 5,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Pantalón fluido estampado",
        "description": "Pantalón fluido de tiro alto y cintura elástica ajustable con cordones. Bolsillos laterales y de plastrón en espalda.",
        "price": 39.95,
        "stock": 1,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2707/080/500/4/w/850/2707080500_1_1_1.jpg?ts=1643813731447",
        "rating": 3,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Pantalón jogger felpa",
        "description": "Pantalón de tiro alto con cintura elástica y ajustable con cordones. Bolsillos laterales. Bajo acabado en puño elástico.",
        "price": 15.95,
        "stock": 40,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2707/080/500/4/w/850/2707080500_1_1_1.jpg?ts=1643813731447",
        "rating": 1,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Pantalón cargo",
        "description": "Pantalón de tiro alto con bolsillos laterales y falso bolsillo de vivo en espalda. Detalle de pliegues en rodilla. Cierre frontal con cremallera y botón.",
        "price": 29.95,
        "stock": 9,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/0327/202/505/2/w/850/0327202505_1_1_1.jpg?ts=1643968223893",
        "rating": 4,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Falda pantalón estructura",
        "description": "Falda pantalón de tiro alto. Bajo con aberturas en delantero. Detalle de falsos botones joya en delantero. Cierre con cremallera lateral oculta en costura.",
        "price": 25.95,
        "stock": 11,
        "shoppingFrom": "Suiza",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/7385/478/653/2/w/850/7385478653_1_1_1.jpg?ts=1645180504697",
        "rating": 4,
        "categorie": "Ropa para mujer",
        "filter" : "Falda"
    },
    {
        "title": "Falda pantalón tiro alto",
        "description": "Falda pantalón de tiro alto. Detalle de pliegue en delantero. Cierre lateral con cremallera oculta en costura.",
        "price": 29.95,
        "stock": 2,
        "shoppingFrom": "Suiza",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2224/707/500/4/w/850/2224707500_1_1_1.jpg?ts=1644585976820",
        "rating": 2,
        "categorie": "Ropa para mujer",
        "filter" : "Falda"
    },
    {
        "title": "Falda pantalón combinada satinada",
        "description": "Falda pantalón de tiro alto. Detalle de cintura combinada con tejido satinado. Bajo con abertura frontal. Cierre lateral con cremallera oculta en costura.",
        "price": 25.95,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2291/888/800/2/w/850/2291888800_1_1_1.jpg?ts=1643114211329",
        "rating": 5,
        "categorie": "Ropa para mujer",
        "filter" : "Falda"
    },
    {
        "title": "Jeggins super elastic",
        "description": "Jeggings de tejido super elástico y tiro muy alto con bolsillos en delantero y espalda. Cierre frontal con cremallera y botón metálico.",
        "price": 17.95,
        "stock": 2,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2021/I/0/1/p/5520/201/802/2/w/850/5520201802_1_1_1.jpg?ts=1628842398395",
        "rating": 3,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Pantalón wide leg satinado",
        "description": "Jeggings de tejido super elástico y tiro muy alto con bolsillos en delantero y espalda. Cierre frontal con cremallera y botón metálico.",
        "price": 39.95,
        "stock": 19,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4043/051/712/5/w/850/4043051712_1_1_1.jpg?ts=1645708228924",
        "rating": 5,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
    {
        "title": "Pantalón full length cintura asimétrica",
        "description": "Pantalón de tiro medio con bolsillos laterales y falsos bolsillos de vivo en espalda. Detalle de pinzas marcadas en delantero. Cierre frontal con cremallera, botón interior y lateral.",
        "price": 29.95,
        "stock": 4,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
        "rating": 5,
        "categorie": "Ropa para mujer",
        "filter" : "Pantalon"
    },
]

const URL = "mongodb://localhost:27017/ecomerce";

mongoose.connect(URL, CONFIG_DB)
    .then(async () =>{
        const womenProductsContent = await WomensProductsModel.find();
        (womenProductsContent) ? await WomensProductsModel.collection.drop() : '';
    })
    .catch(error => console.log('Error buscando en la DB', error))
    .then(async () =>{
        await WomensProductsModel.insertMany(womensProductsArray);
    })
    .catch(error => console.log('Error añadiendo la nueva ropa de mujer'))
    .finally(()=> mongoose.disconnect());