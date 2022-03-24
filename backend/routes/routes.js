const express = require('express');
const router = express.Router();
const pizzaCtrl = require('../controlleurs/pizzas')

router.get('/pizza', pizzaCtrl.getPizzas);


module.exports = router