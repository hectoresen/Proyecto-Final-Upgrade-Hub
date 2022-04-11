//Se requiere mongoose, y se establece tanto la url como la config básica, ambos parámetros entran dentro del mongoose.connect
const mongoose = require("mongoose");

//Mongo siempre entra por el 27017, (lo que hay detras del 27017) es el nombre de la base de datos, lo demás es config básica
const DB_URL = process.env.DB_URL;
const CONFIG_DB = { useNewUrlParser: true, useUnifiedTopology: true};

//Se crea una función que conecte al llamarse con la base de datos:
//Se crean el try y el catch, dentro del try se coloca el await con la respuesta, y un desestructuring de lo que queremos de ella.
const connectToDb = async () => {
    try{
        const response = await mongoose.connect(DB_URL, CONFIG_DB);
        const {host, port, name} = response.connection;
        console.log(`Estamos conectados a ${name}, en ${host}:${port}`)
    }catch(error){
        console.log('Error al conectar en la DB', error);
    }
}

//Se exporta la función, para que sea ejecutada en el index y la url y la config
module.exports = {
    DB_URL,
    CONFIG_DB,
    connectToDb,
};