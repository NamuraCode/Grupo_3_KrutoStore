const express = require('express');
const router = express.Router();4
const {registrado} = require('../middlewares')
const multer = require('multer');
const path = require('path');
const { usuariosController } = require('../controller')

let multerDiskStorag = multer.diskStorage({
    /* Destino de los archivos */
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../../public/images/avatars');
        callback(null, folder);
    },
    /* renombrar los archivos */
    filename: (req, file, callback)=>{
        let imagName= Date.now() + path.extname(file.originalname);
        callback(null, imagName);
    }
})

let fileUploa = multer({ storage: multerDiskStorag})
router.get('/index', usuariosController.getIndex)

router.get('/perfil', registrado, usuariosController.enviarVistaPerfil)

router.put('/perfil', usuariosController.actualizarDatosPerfil)

router.delete('/perfil', usuariosController.deleteUser)

module.exports = router