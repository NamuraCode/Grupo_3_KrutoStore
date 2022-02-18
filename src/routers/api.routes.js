const express = require('express');
const router = express.Router();
const { apiController } = require('../controller')

router.get('/listaProductos', apiController.listaProductos)


module.exports = router