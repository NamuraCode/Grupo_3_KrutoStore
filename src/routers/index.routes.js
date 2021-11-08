const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.index);

router.get('/productCart', controller.productCart);

router.get('/products', controller.products)

router.get('/login', controller.login)

router.get('/productDetail', controller.productDetail)

router.get('/register', controller.register)

router.get('/index', controller.index)

router.get('/productForm', controller.productForm)

router.get('/addProduct', controller.addProduct)

module.exports = router;