const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { usuariosController } = require('../controller')


router.get('/perfil', usuariosController.enviarVistaPerfil)

module.exports = router