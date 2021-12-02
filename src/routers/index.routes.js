const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');
const products = require('../routers/products.routes')

/* GET */

router.get('/', controller.index);

router.get('/productCart', controller.productCart);

router.get('/products', controller.products)

router.get('/login', controller.login)

router.get('/productDetail/:id', controller.productDetail)

router.get('/register', controller.register)

router.get('/index', controller.index)

router.get('/productForm', controller.productForm)

router.get('/addProduct', controller.addProduct)

router.get('/editProduct', controller.editProduct)

router.get('/removeProduct', controller.removeProduct)

/* POST */

router.post('/addProduct', controller.create)

router.post('/products', controller.agregarCart)

module.exports = router;