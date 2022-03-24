const pizzas = require("../products/pizzas");
const desserts = require("../products/desserts")
const boissons = require("../products/boissons")
const entrees = require("../products/entrees")

exports.getPizzas = async ( req, res, next) => {
    res.status(200).json({
        pizzas: pizzas,
        entrees: entrees,
        desserts: desserts,
        boissons: boissons,
    })
    
};