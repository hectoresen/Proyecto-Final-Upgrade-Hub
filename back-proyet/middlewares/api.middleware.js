const apiBuyStockAccesories = (req, res, next) =>{
    console.log('Entrando en Middleware');
    console.log(req.body);
    return next();
}




module.exports = {
    apiBuyStockAccesories
}