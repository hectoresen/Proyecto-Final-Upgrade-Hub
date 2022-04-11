const mongoose = require('mongoose');
const {
    DB_URL,
    CONFIG_DB
} = require('../config/db');
const ProductModel = require('../models/Product');


const productArray = [{
        "title": "Pañuelo Lino Liso",
        "description": "Pañuelo confeccionado en lino 100%. Acabado deshilachado.",
        "price": 19.95,
        "stock": 5,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/3920/042/802/2/w/1126/3920042802_6_1_1.jpg?ts=1645697629862",
        "rating": 4,
        "categorie": "Complementos"
    },
    {
        "title": "Pañuelo Lino Cuadros",
        "description": "Pañuelo confeccionado en lino 100%. Acabado en cuadros.",
        "price": 19.95,
        "stock": 10,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/0653/027/670/2/w/2850/0653027670_6_1_1.jpg?ts=1645697623416",
        "rating": 3,
        "categorie": "Complementos"
    },
    {
        "title": "Pendientes Margaritas",
        "description": "Pendientes con forma de margarita con detalle de abalorios. Cierre con tuerca.",
        "price": 10.95,
        "stock": 4,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4548/037/050/2/w/1126/4548037050_6_1_1.jpg?ts=1645700139825",
        "rating": 5,
        "categorie": "Complementos"
    },
    {
        "title": "Pendientes flores",
        "description": "Pendientes con forma de flor con abalorios de colores.",
        "price": 10.95,
        "stock": 9,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4548/038/615/2/w/1126/4548038615_6_2_1.jpg?ts=1645700141219",
        "rating": 4,
        "categorie": "Complementos"
    },
    {
        "title": "Collar Birth Collection",
        "description": "Collar fino en plata de lino, con piedra de color.",
        "price": 15.95,
        "stock": 10,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2621/001/400/2/w/1126/2621001400_15_1_1.jpg?ts=1645715309768",
        "rating": 4,
        "categorie": "Complementos"
    },
    {
        "title": "Collar Abalorios",
        "description": "Collar fino con abalorios de colores.",
        "price": 15.95,
        "stock": 3,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4736/077/330/2/w/1126/4736077330_6_1_1.jpg?ts=1645085686774",
        "rating": 5,
        "categorie": "Complementos"
    },
    {
        "title": "Brazalete Flores",
        "description": "Brazalete color dorado con motivos florales.",
        "price": 9.95,
        "stock": 15,
        "shoppingFrom": "Suiza",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/1124/002/303/2/w/1126/1124002303_6_2_1.jpg?ts=1644855919055",
        "rating": 5,
        "categorie": "Complementos"
    },
    {
        "title": "Cituron piel resina",
        "description": "Cinturón realizado en piel con hebilla en resina.",
        "price": 22.95,
        "stock": 8,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/6399/007/716/2/w/1126/6399007716_6_3_1.jpg?ts=1645446854265",
        "rating": 4,
        "categorie": "Complementos"
    },
    {
        "title": "Cinturón básico",
        "description": "Cinturón básico en piel sintética de color negro",
        "price": 22.95,
        "stock": 10,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2555/006/800/2/w/1126/2555006800_6_1_1.jpg?ts=1643295087848",
        "rating": 5,
        "categorie": "Complementos"
    },
    {
        "title": "Cinturón Combinado Maxi Hebilla",
        "description": "Cinturón combinado con costura marcada y maxi hebilla redonda.",
        "price": 25.95,
        "stock": 10,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2495/007/800/2/w/1126/2495007800_6_3_1.jpg?ts=1644839016806",
        "rating": 5,
        "categorie": "Complementos"
    },

    {
        "title": "Gorro Marinero Negro",
        "description": "Gorra tipo marinera con visera rigida.",
        "price": 16.95,
        "stock": 9,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/0653/038/800/2/w/1126/0653038800_6_4_1.jpg?ts=1644573949029",
        "rating": 3,
        "categorie": "Complementos"
    },
    {
        "title": "Gorro marinero beige",
        "description": "Gorra tipo marinera con visera rigida.",
        "price": 16.95,
        "stock": 2,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/0653/038/712/2/w/1126/0653038712_6_2_1.jpg?ts=1644573947264",
        "rating": 4,
        "categorie": "Complementos"
    },
    {
        "title": "Sombrero Fieltro",
        "description": "Sombrero de fieltro con ala ancha y cinta combinada a contraste.",
        "price": 18.95,
        "stock": 6,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/3920/024/707/2/w/2850/3920024707_6_1_1.jpg?ts=1641548400998",
        "rating": 5,
        "categorie": "Complementos"
    },
    {
        "title": "Boina Lana",
        "description": "Boina confeccionada con lana.",
        "price": 10.95,
        "stock": 2,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2021/I/0/1/p/3739/214/800/2/w/1126/3739214800_6_1_1.jpg?ts=1631029842750",
        "rating": 4,
        "categorie": "Complementos"
    },
    {
        "title": "Pantalón full fength",
        "description": "Pantalón de tiro medio con bolsillos laterales y falsos bolsillos de vivo en espalda. Detalle de pinzas marcadas en delantero. Cierre frontal con cremallera y botón",
        "price": 29.95,
        "stock": 34,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/3067/419/621/2/w/850/3067419621_15_1_1.jpg?ts=1644923612712",
        "rating": 4,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Top estructura tirante perlas",
        "description": "Top cropped de escote pico y tirantes con aplicación de perlas. Detalle de falsos botones joya. Cierre lateral con cremallera oculta en costura.",
        "price": 25.95,
        "stock": 11,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/8351/028/330/2/w/850/8351028330_2_10_1.jpg?ts=1645521930850",
        "rating": 4,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Pantalón cinturón forrado",
        "description": "Pantalón de tiro alto con cinturón forrado a tono. Bolsillos delanteros y falsos bolsillos de vivo en espalda. Cierre frontal con cremallera, botón interior y gancho metálico.",
        "price": 29.95,
        "stock": 3,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4387/630/712/2/w/850/4387630712_1_1_1.jpg?ts=1643813546779",
        "rating": 3,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Falda pantalón estructura",
        "description": "Falda pantalón de tiro alto. Bajo con acabado desflecado. Cierre lateral con cremallera.",
        "price": 25.95,
        "stock": 8,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/7484/032/679/2/w/850/7484032679_6_1_1.jpg?ts=1645610603519",
        "rating": 1,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Pantalón Jacquard",
        "description": "Pantalón de tiro alto con cintura elástica. Bajo acabado flare.",
        "price": 19.95,
        "stock": 22,
        "shoppingFrom": "Italia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/7484/032/679/2/w/850/7484032679_6_1_1.jpg?ts=1645610603519",
        "rating": 5,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Pantalón fluido estampado",
        "description": "Pantalón fluido de tiro alto y cintura elástica ajustable con cordones. Bolsillos laterales y de plastrón en espalda.",
        "price": 39.95,
        "stock": 1,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2707/080/500/4/w/850/2707080500_1_1_1.jpg?ts=1643813731447",
        "rating": 3,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Pantalón jogger felpa",
        "description": "Pantalón de tiro alto con cintura elástica y ajustable con cordones. Bolsillos laterales. Bajo acabado en puño elástico.",
        "price": 15.95,
        "stock": 40,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2707/080/500/4/w/850/2707080500_1_1_1.jpg?ts=1643813731447",
        "rating": 1,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Pantalón cargo",
        "description": "Pantalón de tiro alto con bolsillos laterales y falso bolsillo de vivo en espalda. Detalle de pliegues en rodilla. Cierre frontal con cremallera y botón.",
        "price": 29.95,
        "stock": 9,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/0327/202/505/2/w/850/0327202505_1_1_1.jpg?ts=1643968223893",
        "rating": 4,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Falda pantalón estructura",
        "description": "Falda pantalón de tiro alto. Bajo con aberturas en delantero. Detalle de falsos botones joya en delantero. Cierre con cremallera lateral oculta en costura.",
        "price": 25.95,
        "stock": 11,
        "shoppingFrom": "Suiza",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/7385/478/653/2/w/850/7385478653_1_1_1.jpg?ts=1645180504697",
        "rating": 4,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Falda pantalón tiro alto",
        "description": "Falda pantalón de tiro alto. Detalle de pliegue en delantero. Cierre lateral con cremallera oculta en costura.",
        "price": 29.95,
        "stock": 2,
        "shoppingFrom": "Suiza",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2224/707/500/4/w/850/2224707500_1_1_1.jpg?ts=1644585976820",
        "rating": 2,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Falda pantalón combinada satinada",
        "description": "Falda pantalón de tiro alto. Detalle de cintura combinada con tejido satinado. Bajo con abertura frontal. Cierre lateral con cremallera oculta en costura.",
        "price": 25.95,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/2291/888/800/2/w/850/2291888800_1_1_1.jpg?ts=1643114211329",
        "rating": 5,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Jeggins super elastic",
        "description": "Jeggings de tejido super elástico y tiro muy alto con bolsillos en delantero y espalda. Cierre frontal con cremallera y botón metálico.",
        "price": 17.95,
        "stock": 2,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2021/I/0/1/p/5520/201/802/2/w/850/5520201802_1_1_1.jpg?ts=1628842398395",
        "rating": 3,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Pantalón wide leg satinado",
        "description": "Jeggings de tejido super elástico y tiro muy alto con bolsillos en delantero y espalda. Cierre frontal con cremallera y botón metálico.",
        "price": 39.95,
        "stock": 19,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4043/051/712/5/w/850/4043051712_1_1_1.jpg?ts=1645708228924",
        "rating": 5,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Pantalón full length cintura asimétrica",
        "description": "Pantalón de tiro medio con bolsillos laterales y falsos bolsillos de vivo en espalda. Detalle de pinzas marcadas en delantero. Cierre frontal con cremallera, botón interior y lateral.",
        "price": 29.95,
        "stock": 4,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
        "rating": 5,
        "categorie": "Ropa para mujer"
    },
    {
        "title": "Nike Dunk High Retro",
        "description": "El icono del baloncesto de los 80, creado para la cancha y adaptado al estilo urbano, vuelve con revestimientos brillantes y los colores universitarios de las zapatillas originales. Con su diseño clásico de baloncesto, las Nike Dunk High Retro llevan de nuevo el estilo vintage de los 80 a las calles. Su zona del tobillo de perfil alto y acolchada incorpora un look clásico y ofrece comodidad.",
        "price": 109.99,
        "stock": 10,
        "shoppingFrom": "España",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/22821215-b39b-4517-b5de-05527dcdc4ce/dunk-high-retro-zapatillas-dlXbK3.png",
        "rating": 4.9,
        "categorie": "Sneakers"
    },
    {
        "title": "Nike Air Force 1 '07 LV8",
        "description": "Con un diseño que combina la diversión retro con el icónico estilo de baloncesto, las Nike Air Force 1 '07 LV8 ofrecen un nuevo giro en lo que mejor conoces: revestimientos cosidos, colores llamativos y la cantidad perfecta de estilo de baloncesto para ser el centro de atención.",
        "price": 119.99,
        "stock": 15,
        "shoppingFrom": "Francia",
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7276b8ce-67a4-45fd-8e19-ed6bb0f7772b/air-force-1-07-lv8-zapatillas-4hl24v.png",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Forum Low ",
        "description": " Esta versión luce un diseño con los colores clásicos que podría lucir cualquier equipo en la cancha y que nos recuerda que no estaríamos donde estamos sin la ayuda de los demás. La parte superior de piel blanca y los detalles en contraste conservan intacto el legado de la Forum.",
        "price": 100,
        "stock": 33,
        "shoppingFrom": "Alemania",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75aee7eb0fc343d484c9adf30019d225_9366/Zapatilla_Forum_Low_Blanco_GY8556_01_standard.jpg",
        "rating": 3.1,
        "categorie": "Sneakers",
    },
    {
        "title": "Adidas NMD_R1 V2",
        "description": "Esta zapatilla presenta una parte superior fabricada con un hilo reciclado de alto rendimiento creado con al menos un 50% de Parley Ocean Plastic —un material reinventado a partir de residuos plásticos recogidos en zonas costeras para evitar que contaminen nuestros océanos. El otro 50% del hilo es poliéster reciclado.",
        "price": 140,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/65462195082b4a8aaa6bad6b008b2da0_9366/Zapatilla_NMD_R1_V2_Blanco_GX6368.jpg",
        "rating": 4.5,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Zoom Pegasus 38",
        "description": "Sonríe con cada kilómetro.Las Pegasus 38 son un clásico de gran eficacia que ofrece una mayor comodidad y elasticidad para que disfrutes de tus carreras más largas.Los tonos neutros rinden homenaje al amor por la naturaleza y el aire libre.Los simpáticos ojos del logotipo Swoosh le dan un toque alegre a estas zapatillas de gran ligereza.",
        "price": 124,
        "stock": 4,
        "shoppingFrom": "Francia",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c062b952-d202-4e33-8be2-7fc2c5e81beb/air-zoom-pegasus-38-zapatillas-de-running-carretera-bWMjP2.png",
        "rating": 5.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Air Jordan 1 Hi FlyEase",
        "description": "Las Air Jordan 1 Hi FlyEase combinan el codiciado estilo de las primeras zapatillas exclusivas de Michael Jordan con un sistema de entrada rápido y sencillo con una sola mano.No hay cordones, solo una cremallera envolvente y dos correas para un ajuste personalizable.",
        "price": 159,
        "stock": 23,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ef30042c-c7c1-40a4-896c-e9a4b0dd24e0/air-jordan-1-hi-flyease-zapatillas-F1Rw6B.png",
        "rating": 5.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Max 97 SE",
        "description": "Las Max Air cambiaron las reglas del juego en el 87. Ahora, celebramos su aniversario esmeralda (¡35 años!) con las Nike Air Max 97 SE. Los estampados y colores Emerald resaltan este gran momento para la historia, y mantienen las clásicas líneas de diseño curvo y la amortiguación del modelo original.",
        "price": 189.99,
        "stock": 12,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5ecc4749-74d4-4adb-9889-445c9dac4abd/air-max-97-se-zapatillas-FPxPtp.png",
        "rating": 4.1,
        "categorie": "Sneakers",
    },
    {
        "title": "ADIDAS Superstar",
        "description": "Diseño iconico para unas zapatillas hechas en piel en su parte exterior y con tela para un interior confortable.",
        "price": 49.95,
        "stock": 40,
        "shoppingFrom": "España",
        "image": "https://dakonda.com/57169-large_default/adidas-superstar-zapatillas.jpg",
        "rating": 3.9,
        "categorie": "Sneakers",
    },
    {
        "title": "ADIDAS Stan Smith",
        "description": "La zapatilla adidas Stan Smith lleva un buen tiempo dando de qué hablar. Para ser exactos, desde 1971. Adaptarse a los cambios está en su ADN. Nació para las pistas de tenis y ahora es un diseño urbano y versátil que puedes ponerte cuando quieras. Esta versión actualiza los colores clásicos y los materiales del modelo original.",
        "price": 100,
        "stock": 32,
        "shoppingFrom": "España",
        "image": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c1f600512d8c4b1da89dad7c00f57ac8_9366/Zapatilla_Stan_Smith_Blanco_GW0486_01_standard.jpg",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Chuck Taylor All Star Leather",
        "description": "Están confeccionadas con un tejido de piel supersuave, y puedes hacer que sean tan elegantes o modernas como quieras. Tú escribes la historia.",
        "price": 80,
        "stock": 33,
        "shoppingFrom": "España",
        "image": "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw6b9345d3/images/a_107/132173C_A_107X1.jpg?sw=2000",
        "rating": 4.9,
        "categorie": "Sneakers",
    },
    {
        "title": "Vans Ward Suede",
        "description": "SUELA: Es la parte inferior de la zapatilla que toca el suelo.",
        "price": 38,
        "stock": 40,
        "shoppingFrom": "Francia",
        "image": "https://m.media-amazon.com/images/I/41MAOKcfhXL._AC_.jpg",
        "rating": 3.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Morrison Bel-Air",
        "description": "Las Morrison Nineties Bel-Air es un homenaje a la serie noventera “El Principe de Bel-Air” por sus colores vivos, atrevidos y llamativos. Muy de la onda de los 90 con un estampado muy vintagero. Está fabricadas en serraje multicolor, los cordones son de algodón blanco y la suela color tocino.",
        "price": 75,
        "stock": 20,
        "shoppingFrom": "España",
        "image": "https://morrisonshoes.com/1336-large_default/bel-air.jpg",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Veja Esplar",
        "description": "Algodón procedente de agricultura biológica. Cultivado sin pesticidas ni productos químicos, el algodón procedente de agricultura orgánica protege el suelo, el agua y la salud de aquellos que lo cosechan. También favorece la preservación de nuestro planeta y de nuestra salud.",
        "price": 99,
        "stock": 4,
        "shoppingFrom": "Francia",
        "image": "https://cdn.laredoute.com/products/f/8/d/f8d9733066ecdc25cbdd491482491977.jpg?imgopt=twic&twic=v1/cover=700x700",
        "rating": 3.0,
        "categorie": "Sneakers",
    },
    {
        "title": "Puma Suede VTG GTX",
        "description": "Desde su llegada a escena en 1968, la colección Suede ha cambiado las reglas del juego y ha sido utilizada por figuras icónicas de varias generaciones. Y este modelo, diseñado...",
        "price": 99,
        "stock": 40,
        "shoppingFrom": "España",
        "image": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/382790/01/sv01/fnd/EEA/fmt/png/Zapatillas-Suede-VTG-GTX",
        "rating": 4.0,
        "categorie": "Sneakers",
    },
    {
        "title": "MUNICH ALPHA 65",
        "description": "Zapatillas deportivas de hombre Munich en blanco con detalles a contraste. Sneaker de color blanco con detalles en gris, gris oscuro y ocre. Contraste de materiales en el corte destacando. Cierre mediante cordones. Tirador en la parte trasera. Estabilizador de TPU inyectado en la talonera con logo grabado. ",
        "price": 100,
        "stock": 24,
        "shoppingFrom": "Alemania",
        "image": "https://dhb3yazwboecu.cloudfront.net/180/V5/FASHION/8410065-01-L.jpg",
        "rating": 3,
        "categorie": "Sneakers",
    },
    {
        "title": "DC Trase",
        "description": "parte superior: parte superior en ante, Tejido interior de malla, Logo HD estampado , Construcción vulcanizada para sentir mejor la tabla y la flexibilidad de la suela",
        "price": 35,
        "stock": 4,
        "shoppingFrom": "Alemania",
        "image": "https://images.boardriders.com/globalGrey/dcshoes-products/all/default/xlarge/adys300652_dcshoes,p_2gg_frt2.jpg",
        "rating": 3,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Zoom SuperRep 3",
        "description": "Libera toda tu potencia en cada repetición con unas zapatillas rediseñadas que aportan sujeción y estabilidad a cada movimiento.Son más ligeras que las versiones anteriores para que puedas mantener un ritmo alto durante los circuitos de entrenamientos y las clases de HIIT.Además, la amortiguación Zoom Air y la flexibilidad en la planta del pie son ideales para cada zancada, paso y salto",
        "price": 130,
        "stock": 32,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f15f60f-151f-4e0f-8625-d28491814cb6/air-zoom-superrep-3-zapatillas-las-clases-de-hiit-bjJmZ8.png",
        "rating": 4,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Max 90 Premium",
        "description": "No hay nada tan cómodo.No hay nada tan demostrado.Las Nike Air Max 90 Premium se mantienen fieles a sus raíces con la icónica suela tipo gofre, los revestimientos cosidos y los clásicos detalles de TPU.Los detalles de cadena extraíbles añaden un toque de los 90 con la cantidad perfecta de brillo.",
        "price": 160,
        "stock": 40,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f3a5907b-fc05-49ee-8d20-9855b5d8b216/air-max-90-zapatillas-Z8GT9f.png",
        "rating": 4.2,
        "categorie": "Sneakers",
    },
    {
        "title": "Nike Air Force 1 Pixel",
        "description": "Siempre has dado en el clavo. Por lo que las Nike Air Force 1 Pixel son perfectas para ti. La suela exterior distorsionada y la mediasuela elevada con detalles pixelados de gran tamaño añaden un toque futurista.",
        "price": 112,
        "stock": 4,
        "shoppingFrom": "Alemania",
        "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a2ba5c4d-2746-42e6-a42f-677c6bcefba7/air-force-1-pixel-zapatillas-4Hcq7k.png",
        "rating": 5,
        "categorie": "Sneakers",
    },
    {
        "title": "PANTALONES STRAIGHT FIT",
        "description": "Pantalones straight fit. Bolsillos laterales en cadera y detalle de bolsillos plastrón en espalda. Cierre frontal con cremallera y botón.",
        "price": 25.95,
        "stock": 9,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/6917/461/800/2/w/563/6917461800_2_1_1.jpg?ts=1645186369445",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "GABARDINA FORRO COMBINADO",
        "description": "Gabardina de cuello solapa y manga larga acabada en puño con detalle de trabilla. Forro interior desmontable. Bolsillos de vivo en cadera. Bajo con abertura central en espalda. Cierre frontal de botonadura oculta por solapa.",
        "price": 25.95,
        "stock": 29,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/5320/304/707/2/w/563/5320304707_2_5_1.jpg?ts=1645178772507",
        "rating": 4,
        "categorie": "Ropa para hombre"
    },{
        "title": "CAZADORA CONJUNTO BOLSILLOS",
        "description": "Cazadora de cuello solapa y manga larga acabada en puño con botón. Bolsillos de plastrón con solapa en pecho. Cierre frontal con botones a presión ocultos.",
        "price": 46.95,
        "stock": 26,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/1/p/4381/795/420/32/w/877/4381795420_15_1_1.jpg?ts=1645606005769",
        "rating": 4,
        "categorie": "Ropa para hombre"
    },{
        "title": "PARKA CANGURO COLOR BLOCK",
        "description": "Parka canguro acolchada en su interior. Cuello subido con capucha ajustable y manga larga acabada en puño con elástico ajustable con tira adherente. Bolsillo tipo canguro en cadera. Bajo ajustable con elástico en laterales. Cierre frontal",
        "price": 66.95,
        "stock": 5,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4391/408/305/2/w/563/4391408305_2_1_1.jpg?ts=1645189174900",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "SOBRECAMISA ESTAMPADO HOJAS",
        "description": "Sobrecamisa relaxed fit. Cuello solapa y manga larga acabada en puño con botón. Bolsillos de plastrón con solapa en pecho. Cierre frontal de botonadura.",
        "price": 45.95,
        "stock": 12,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/6085/404/524/2/w/563/6085404524_2_4_1.jpg?ts=1645782071561",
        "rating": 1,
        "categorie": "Ropa para hombre"
    },{
        "title": "CHALECO COLOR BLOCK",
        "description": "Chaleco de cuello subido con el interior acabado en rib combinado a contraste. Manga sisa. Bolsillos de plastrón con solapa en pecho y cintura. Cierre frontal con cremallera.",
        "price": 54.95,
        "stock": 14,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0761/408/066/2/w/563/0761408066_2_5_1.jpg?ts=1645695488168",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "CAMISETA BOLSILLO COMBINADO",
        "description": "Camiseta confeccionada en tejido con mezcla de algodón. Diseñada para practicar cualquier deporte.",
        "price": 33.95,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0977/550/641/2/w/563/0977550641_6_1_1.jpg?ts=1642594034230",
        "rating": 1,
        "categorie": "Ropa para hombre"
    },{
        "title": "PANTALÓN JOGGER BÁSICO",
        "description": "Pantalón de cintura elástica ajustable con cordón. Bolsillos frontales y detalle de bolsillo plastrón en espalda. Bajo acabado en puño elástico",
        "price": 22.95,
        "stock": 9,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/5584/452/827/2/w/563/5584452827_2_5_1.jpg?ts=1642070893469",
        "rating": 2,
        "categorie": "Ropa para hombre"
    },{
        "title": "BERMUDA ESPIGA ALGODÓN",
        "description": "Bermuda confeccionada en tejido de algodón con estructura. Cintura elástica ajustable con cordón. Bolsillos frontales y detalle de bolsillos en espalda. Bajo acabado con vuelta. Cierre frontal con cremallera y botón.",
        "price": 13.95,
        "stock": 7,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/6917/424/052/2/w/429/6917424052_2_5_1.jpg?ts=1645189697095",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "POLO BÁSICO",
        "description": "Polo de cuello solapa con cierre frontal de botonadura oculta por solapa. Manga corta acabada con rib. Bajo con aberturas laterales.",
        "price": 21.95,
        "stock": 12,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4442/441/800/2/w/563/4442441800_6_1_1.jpg?ts=1645691272613",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "SUDADERA BÁSICA CAPUCHA",
        "description": "Sudadera amplia de cuello con capucha ajustable y manga larga. Bolsillos frontal tipo canguro. Acabados en rib.",
        "price": 31.95,
        "stock": 22,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0761/410/671/2/w/563/0761410671_2_1_1.jpg?ts=1643807801826",
        "rating": 3,
        "categorie": "Ropa para hombre"
    },{
        "title": "SUDADERA BORDADO CONTRASTE",
        "description": "Sudadera con cuello redondo y manga larga. Detalle de parche combinado a contraste en pecho y estampación en espalda. Acabados en rib.",
        "price": 13.95,
        "stock": 6,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0962/429/251/2/w/563/0962429251_2_2_1.jpg?ts=1645604755411",
        "rating": 3,
        "categorie": "Ropa para hombre"
    },{
        "title": "CAZADORA ACOLCHADA RIPSTOP",
        "description": "Cazadora ligeramente acolchada confeccionada en tejido con estructura ripstop, resistente a desgarros. Cuello subido con capucha y manga larga acabada en puño con elástico. Bolsillos con cierre de cremallera en cadera y detalle de bolsillo",
        "price": 32.95,
        "stock": 24,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4391/404/800/2/w/563/4391404800_6_1_1.jpg?ts=1642520024234",
        "rating": 3,
        "categorie": "Ropa para hombre"
    },{
        "title": "JERSEY SOFT",
        "description": "Jersey amplio de cuello redondo y manga larga. Acabados en rib.",
        "price": 23.95,
        "stock": 12,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "ABRIGO CUELLO COMBINADO",
        "description": "Abrigo ligeramente acolchado en su interior. Cuello subido doble desmontable con cremallera.",
        "price": 33.95,
        "stock": 22,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4183/271/801/2/w/563/4183271801_6_1_1.jpg?ts=1640793326167",
        "rating": 3,
        "categorie": "Ropa para hombre"
    },{
        "title": "CAZADORA ALGODÓN COLOR BLOCK",
        "description": "Cazadora confeccionada en tejido de algodón. Cuello solapa y manga larga. Bolsillos frontales de plastrón en pecho y cadera. ",
        "price": 11.95,
        "stock": 7,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/0706/360/710/2/w/563/0706360710_6_1_1.jpg?ts=1642520056879",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "CHALECO ACOLCHADO ENGOMADO",
        "description": "Chaleco confeccionado en tejido con acabado engomado. Cuello subido y manga sisa. Bolsillos de vivo en cadera. Cierre frontal con cremallera.",
        "price": 55.95,
        "stock": 13,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/8574/446/800/2/w/563/8574446800_2_1_1.jpg?ts=1645605347757",
        "rating": 3,
        "categorie": "Ropa para hombre"
    },{
        "title": "CHALECO ACOLCHADO ENGOMADO",
        "description": "Chaleco confeccionado en tejido con acabado engomado. Cuello subido y manga sisa. Bolsillos de vivo en cadera. Cierre frontal con cremallera.",
        "price": 52.99,
        "stock": 12,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/8574/446/811/2/w/563/8574446811_6_3_1.jpg?ts=1645446460250",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "JEANS CARROT RELAXED FIT",
        "description": "Jeans carrot relaxed fit. Cinco bolsillos. Lavado efecto rotos en perneras. Cierre frontal con cremallera y botón.",
        "price": 44.21,
        "stock": 15,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/1538/452/800/2/w/204/1538452800_6_1_1.jpg?ts=1643903151403",
        "rating": 4,
        "categorie": "Ropa para hombre"
    },{
        "title": "JEANS STRAIGHT FIT",
        "description": "Jeans straight fit con cinco bolsillos. Efecto lavado. Cierre frontal con botones",
        "price": 63.99,
        "stock": 33,
        "shoppingFrom": "España",
        "image": "https://static.zara.net/photos///2021/I/0/2/p/8727/350/427/2/w/563/8727350427_6_1_1.jpg?ts=1635935954309",
        "rating": 4,
        "categorie": "Ropa para hombre"
    },{
        "title": "BLAZER CRUZADA CONJUNTO",
        "description": "Blazer de cuello con solapas de pico y manga larga acabada en puño con detalle de botón. Bolsillo de vivo en pecho y de solapa en cadera.",
        "price": 24.22,
        "stock": 42,
        "shoppingFrom": "Alemania",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/4433/795/500/2/w/563/4433795500_6_1_1.jpg?ts=1645445381284",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "CAZADORA JACQUARD GEOMÉTRICO",
        "description": "Cazadora de cuello solapa y manga larga acabada en puño con botón. Bolsillos plastrón en cadera. Cierre frontal de botonadura",
        "price": 44.95,
        "stock": 2,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/9632/411/401/2/w/563/9632411401_2_1_1.jpg?ts=1645604768506",
        "rating": 5,
        "categorie": "Ropa para hombre"
    },{
        "title": "CAZADORA BOMBER ESTRUCTURA",
        "description": "Cazadora de cuello acabado en rib. Manga larga. Bolsillos de plastrón con solapa en pecho. Bajo acabado elástico. Cierre frontal con cremallera.",
        "price": 25.95,
        "stock": 25,
        "shoppingFrom": "Francia",
        "image": "https://static.zara.net/photos///2022/V/0/2/p/8288/401/401/2/w/563/8288401401_2_1_1.jpg?ts=1642002160520",
        "rating": 4,
        "categorie": "Ropa para hombre"
    }
]

const URL = "mongodb://localhost:27017/ecomerce";

mongoose.connect(URL, CONFIG_DB)
    .then(async () => {
        const productsArray = await ProductModel.find();
        if (productsArray.length) {
            await ProductModel.collection.drop();
        }
    })
    .catch(error => console.log("Error buscando en la DB", error))
    .then(async () => {
        await ProductModel.insertMany(productArray);
    })
    .catch(error => console.log("Error añadiendo los productos"))
    .finally(() => mongoose.disconnect());