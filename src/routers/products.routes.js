const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');
const product = require('../controller/productsController')


router.get('/addProducts', controller.products);
router.get('/addProduct', product.create);


module.exports = router;