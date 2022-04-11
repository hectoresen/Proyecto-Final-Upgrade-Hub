const mongoose = require('mongoose');
const {
    DB_URL,
    CONFIG_DB
} = require('../config/db');
const ManProductsModel = require('../models/ManProducts');

const manProductsArray = [
    {
        "title": "PANTALONES STRAIGHT FIT",
        "description": "Pantalones straight fit. Bolsillos laterales en cadera y detalle de bolsillos plastrón en espalda. Cierre frontal con cremallera y botón.",
        "price": 25.95,
        "stock": 9,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/6917/461/800/2/w/563/6917461800_2_1_1.jpg?ts=1645186369445",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Pantalones"

    },{
        "title": "GABARDINA FORRO COMBINADO",
        "description": "Gabardina de cuello solapa y manga larga acabada en puño con detalle de trabilla. Forro interior desmontable. Bolsillos de vivo en cadera. Bajo con abertura central en espalda. Cierre frontal de botonadura oculta por solapa.",
        "price": 25.95,
        "stock": 29,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/5320/304/707/2/w/563/5320304707_2_5_1.jpg?ts=1645178772507",
        "rating": 4,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CAZADORA CONJUNTO BOLSILLOS",
        "description": "Cazadora de cuello solapa y manga larga acabada en puño con botón. Bolsillos de plastrón con solapa en pecho. Cierre frontal con botones a presión ocultos.",
        "price": 46.95,
        "stock": 26,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4381/795/420/32/w/877/4381795420_15_1_1.jpg?ts=1645606005769",
        "rating": 4,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "PARKA CANGURO COLOR BLOCK",
        "description": "Parka canguro acolchada en su interior. Cuello subido con capucha ajustable y manga larga acabada en puño con elástico ajustable con tira adherente. Bolsillo tipo canguro en cadera. Bajo ajustable con elástico en laterales. Cierre frontal",
        "price": 66.95,
        "stock": 5,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4391/408/305/2/w/563/4391408305_2_1_1.jpg?ts=1645189174900",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "SOBRECAMISA ESTAMPADO HOJAS",
        "description": "Sobrecamisa relaxed fit. Cuello solapa y manga larga acabada en puño con botón. Bolsillos de plastrón con solapa en pecho. Cierre frontal de botonadura.",
        "price": 45.95,
        "stock": 12,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/6085/404/524/2/w/563/6085404524_2_4_1.jpg?ts=1645782071561",
        "rating": 1,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CHALECO COLOR BLOCK",
        "description": "Chaleco de cuello subido con el interior acabado en rib combinado a contraste. Manga sisa. Bolsillos de plastrón con solapa en pecho y cintura. Cierre frontal con cremallera.",
        "price": 54.95,
        "stock": 14,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0761/408/066/2/w/563/0761408066_2_5_1.jpg?ts=1645695488168",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CAMISETA BOLSILLO COMBINADO",
        "description": "Camiseta confeccionada en tejido con mezcla de algodón. Diseñada para practicar cualquier deporte.",
        "price": 33.95,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0977/550/641/2/w/563/0977550641_6_1_1.jpg?ts=1642594034230",
        "rating": 1,
        "categorie": "Ropa para hombre",
        "filter":"Camiseta"
    },{
        "title": "PANTALÓN JOGGER BÁSICO",
        "description": "Pantalón de cintura elástica ajustable con cordón. Bolsillos frontales y detalle de bolsillo plastrón en espalda. Bajo acabado en puño elástico",
        "price": 22.95,
        "stock": 9,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/5584/452/827/2/w/563/5584452827_2_5_1.jpg?ts=1642070893469",
        "rating": 2,
        "categorie": "Ropa para hombre",
        "filter":"Pantalones"
    },{
        "title": "BERMUDA ESPIGA ALGODÓN",
        "description": "Bermuda confeccionada en tejido de algodón con estructura. Cintura elástica ajustable con cordón. Bolsillos frontales y detalle de bolsillos en espalda. Bajo acabado con vuelta. Cierre frontal con cremallera y botón.",
        "price": 13.95,
        "stock": 7,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/6917/424/052/2/w/429/6917424052_2_5_1.jpg?ts=1645189697095",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Pantalones"
    },{
        "title": "POLO BÁSICO",
        "description": "Polo de cuello solapa con cierre frontal de botonadura oculta por solapa. Manga corta acabada con rib. Bajo con aberturas laterales.",
        "price": 21.95,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4442/441/800/2/w/563/4442441800_6_1_1.jpg?ts=1645691272613",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Camiseta"
    },{
        "title": "SUDADERA BÁSICA CAPUCHA",
        "description": "Sudadera amplia de cuello con capucha ajustable y manga larga. Bolsillos frontal tipo canguro. Acabados en rib.",
        "price": 31.95,
        "stock": 22,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0761/410/671/2/w/563/0761410671_2_1_1.jpg?ts=1643807801826",
        "rating": 3,
        "categorie": "Ropa para hombre",
        "filter":"Jersey"
    },{
        "title": "SUDADERA BORDADO CONTRASTE",
        "description": "Sudadera con cuello redondo y manga larga. Detalle de parche combinado a contraste en pecho y estampación en espalda. Acabados en rib.",
        "price": 13.95,
        "stock": 6,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0962/429/251/2/w/563/0962429251_2_2_1.jpg?ts=1645604755411",
        "rating": 3,
        "categorie": "Ropa para hombre",
        "filter":"Jersey"
    },{
        "title": "CAZADORA ACOLCHADA RIPSTOP",
        "description": "Cazadora ligeramente acolchada confeccionada en tejido con estructura ripstop, resistente a desgarros. Cuello subido con capucha y manga larga acabada en puño con elástico. Bolsillos con cierre de cremallera en cadera y detalle de bolsillo",
        "price": 32.95,
        "stock": 24,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4391/404/800/2/w/563/4391404800_6_1_1.jpg?ts=1642520024234",
        "rating": 3,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "JERSEY SOFT",
        "description": "Jersey amplio de cuello redondo y manga larga. Acabados en rib.",
        "price": 23.95,
        "stock": 12,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Jersey"
    },{
        "title": "ABRIGO CUELLO COMBINADO",
        "description": "Abrigo ligeramente acolchado en su interior. Cuello subido doble desmontable con cremallera.",
        "price": 33.95,
        "stock": 22,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4183/271/801/2/w/563/4183271801_6_1_1.jpg?ts=1640793326167",
        "rating": 3,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CAZADORA ALGODÓN COLOR BLOCK",
        "description": "Cazadora confeccionada en tejido de algodón. Cuello solapa y manga larga. Bolsillos frontales de plastrón en pecho y cadera. ",
        "price": 11.95,
        "stock": 7,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0706/360/710/2/w/563/0706360710_6_1_1.jpg?ts=1642520056879",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CHALECO ACOLCHADO ENGOMADO",
        "description": "Chaleco confeccionado en tejido con acabado engomado. Cuello subido y manga sisa. Bolsillos de vivo en cadera. Cierre frontal con cremallera.",
        "price": 55.95,
        "stock": 13,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/8574/446/800/2/w/563/8574446800_2_1_1.jpg?ts=1645605347757",
        "rating": 3,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CHALECO ACOLCHADO ENGOMADO",
        "description": "Chaleco confeccionado en tejido con acabado engomado. Cuello subido y manga sisa. Bolsillos de vivo en cadera. Cierre frontal con cremallera.",
        "price": 52.99,
        "stock": 12,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/8574/446/811/2/w/563/8574446811_6_3_1.jpg?ts=1645446460250",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "JEANS CARROT RELAXED FIT",
        "description": "Jeans carrot relaxed fit. Cinco bolsillos. Lavado efecto rotos en perneras. Cierre frontal con cremallera y botón.",
        "price": 44.21,
        "stock": 15,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/1538/452/800/2/w/204/1538452800_6_1_1.jpg?ts=1643903151403",
        "rating": 4,
        "categorie": "Ropa para hombre",
        "filter":"Pantalones"
    },{
        "title": "JEANS STRAIGHT FIT",
        "description": "Jeans straight fit con cinco bolsillos. Efecto lavado. Cierre frontal con botones",
        "price": 63.99,
        "stock": 33,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2021/I/0/2/p/8727/350/427/2/w/563/8727350427_6_1_1.jpg?ts=1635935954309",
        "rating": 4,
        "categorie": "Ropa para hombre",
        "filter":"Pantalones"
    },{
        "title": "BLAZER CRUZADA CONJUNTO",
        "description": "Blazer de cuello con solapas de pico y manga larga acabada en puño con detalle de botón. Bolsillo de vivo en pecho y de solapa en cadera.",
        "price": 24.22,
        "stock": 42,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4433/795/500/2/w/563/4433795500_6_1_1.jpg?ts=1645445381284",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CAZADORA JACQUARD GEOMÉTRICO",
        "description": "Cazadora de cuello solapa y manga larga acabada en puño con botón. Bolsillos plastrón en cadera. Cierre frontal de botonadura",
        "price": 44.95,
        "stock": 2,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/9632/411/401/2/w/563/9632411401_2_1_1.jpg?ts=1645604768506",
        "rating": 5,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    },{
        "title": "CAZADORA BOMBER ESTRUCTURA",
        "description": "Cazadora de cuello acabado en rib. Manga larga. Bolsillos de plastrón con solapa en pecho. Bajo acabado elástico. Cierre frontal con cremallera.",
        "price": 25.95,
        "stock": 25,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/8288/401/401/2/w/563/8288401401_2_1_1.jpg?ts=1642002160520",
        "rating": 4,
        "categorie": "Ropa para hombre",
        "filter":"Abrigo"
    }
];

const URL = "mongodb://localhost:27017/ecomerce";

mongoose.connect(URL, CONFIG_DB)
.then(async () =>{
    const manProductsContent = await ManProductsModel.find();
    (manProductsContent) ? await ManProductsModel.collection.drop() : '';
})
.catch(error => console.log("Error buscando en la DB", error))
.then(async () =>{
    await ManProductsModel.insertMany(manProductsArray);
})
.catch(error => console.log('Error añadiendo la nueva ropa de hombre'))
.finally(() => mongoose.disconnect());