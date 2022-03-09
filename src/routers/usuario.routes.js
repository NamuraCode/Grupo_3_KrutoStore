const express = require('express');
const router = express.Router();
const { usuariosController } = require('../controller')
const {autenticacionRegistro, registrado, verificacionCookie, validationLogin, validationsRegister, validationsPerfil, fileUploadAvatars} = require('../middlewares')


router.get('/index', usuariosController.getIndex)


router.get('/perfil', registrado, usuariosController.enviarVistaPerfil)
router.put('/perfil', registrado, validationsPerfil, fileUploadAvatars.single('image'), usuariosController.actualizarDatosPerfil)
router.delete('/perfil', registrado, usuariosController.deleteUser)


router.get('/login', verificacionCookie, autenticacionRegistro, usuariosController.login)
router.post('/login', validationLogin, usuariosController.log)


router.get('/register', verificacionCookie, autenticacionRegistro, usuariosController.regi)
router.post('/register', fileUploadAvatars.single('file'), validationsRegister, usuariosController.register)


module.exports = router