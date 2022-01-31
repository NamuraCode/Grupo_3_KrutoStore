const express = require('express');
const router = express.Router();
const userRouter = require('./usuario.routes') 
const productRouter= require('./prodcuts.routes')
const {controller} = require('../controller');
 

router.use('/', userRouter)
router.use('/', productRouter)

router.get('/', controller.index)

router.get('/aboutUs', controller.aboutUs)

router.get('/opcionesPagos', controller.opcionesPagos)

router.get('/opcionesEnvios', controller.opcionesEnvios)

router.get('/politicaDevoluciones', controller.politicaDevoluciones)

module.exports = router;

