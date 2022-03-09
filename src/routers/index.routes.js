const express = require('express');
const router = express.Router();
const userRouter = require('./usuario.routes') 
const productRouter = require('./products.routes')
const apiRouter = require(`./api.routes`)
const {controller} = require('../controller');
 

router.use('/', userRouter)
router.use('/', productRouter)
router.use('/api', apiRouter)

router.get('/', controller.index)

router.post('/salir', controller.salir)

router.get('/aboutUs', controller.aboutUs)

router.get('/opcionesPagos', controller.opcionesPagos)

router.get('/opcionesEnvios', controller.opcionesEnvios)

router.get('/politicaDevoluciones', controller.politicaDevoluciones)

module.exports = router;

