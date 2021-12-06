const express = require('express');
const router = express.Router();
const path = require('path');
const usersController = require('../controller/userController');
const indexController = require('../controller/indexController');
const multer = require('multer');
const {body} = require('express-validator');




// Formulario de registro
router.get('/register', usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Formulario de Login
router.get('/login', usersController.login);

// Perfil de usuario
router.get('/profile/:userId', usersController.profile);

module.exports = router; 