const pizzas = require("../products/pizzas");

exports.getPizzas = async ( req, res, next) => {
    res.status(200)
    res.send({ pizzas})
};