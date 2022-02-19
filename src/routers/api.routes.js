const express = require('express');
const router = express.Router();
const { apiController } = require('../controller')

//Productos API
router.get('/products', apiController.listProducts)

router.get("/products/:id", apiController.detailProduct)

//Usuarios API
router.get('/users', apiController.listUsers)

router.get("/users/:id", apiController.detailUser)



module.exports = router