/* Servidor Express */
const express = require('express');
const router = express.Router();
/* multer para cargar imagenes */ 
const multer = require('multer');
/* Path para las rutas */
const path = require('path')
/* Controller un objeto con metodos de respuesta (res) */
const controller = require('../controller/index.controller');
const { body } = require('express-validator')
const admin = require('../middlewares/adminSessionMiddleware')
const autenticacionRegistro = require('../middlewares/usuarioRegistradoMiddleware')
const registrado = require('../middlewares/usuarioNoRegistradoMiddleware')
 
/*Variable de validaciones */

const validations = [
    body('username')
        .notEmpty().withMessage('Campo username vacio'),
    body('email')
        .notEmpty().withMessage('Campo email vacio').bail()
        .isEmail().withMessage('Formato de correo no valido'),
    body('password')
        .notEmpty().withMessage('Campo contraseña vacio').bail()
        .isLength({min: 8}).withMessage('Campo contraseña minimo 8 caracteres'),
    body('coPassword')
        .notEmpty().withMessage('Campo contraseña vacio'),
    body('checkbox')
        .notEmpty().withMessage('Acepta terminos y condiciones'),
]

const validation = [
    body('username')
        .notEmpty().withMessage('Campo username vacio'),
    body('password')
        .notEmpty().withMessage('Campo contraseña vacio').bail()
        .isLength({min: 8}).withMessage('Campo contraseña minimo 8 caracteres'),
]
/* diskStorage para decirle a multer donde guardar los archivos y que queremos agregarles a esos archivos */

let multerDiskStorage = multer.diskStorage({
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
let multerDiskStorag = multer.diskStorage({
    /* Destino de los archivos */
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../../public/images/productos');
        callback(null, folder);
    },
    /* renombrar los archivos */
    filename: (req, file, callback)=>{
        let imagName= Date.now() + path.extname(file.originalname);
        callback(null, imagName);
    }
})

/* Guardarlo en variable para llamarlo como middleware */
let fileUpload = multer({ storage: multerDiskStorage})
let fileUploa = multer({ storage: multerDiskStorag})
//
/* GET */
/* Get es un metodo HTTP para obtener las vistas y enviar datos no seguros de formulario */
router.get('/', controller.index);

router.get('/productCart', registrado, controller.productCart);

router.get('/products', controller.products)

router.get('/login', autenticacionRegistro, controller.login)
router.post('/login', validation, controller.log)

router.get('/productDetail/:id', controller.productDetail)

router.get('/check', (req, res) => {
    res.send(req.session.user)
})

router.get('/register', autenticacionRegistro, controller.regi)
router.post('/register', fileUpload.single('file'), validations, controller.register)


router.get('/index', controller.index)

router.get('/addProduct', admin ,controller.addProduct)

/* PUT */
/* Put es un metodo para editar datos de un formulario */
router.get('/editProduct/:id', admin, controller.editProduct)

router.put('/editProduct/:id', admin, fileUploa.single('image'), controller.edit)

router.get('/aboutUs', controller.aboutUs)

router.get('/opcionesPagos', controller.opcionesPagos)

router.get('/opcionesEnvios', controller.opcionesEnvios)

router.get('/politicaDevoluciones', controller.politicaDevoluciones)

// router.get('/admin', controller.admin)

/* DELETE */
/* Delete es un metodo para elimiar datos de un formulario */
router.get('/removeProduct/:id', admin, controller.removeProduct)

router.delete('/removeProduct/delete/:id', admin, controller.deleteProduct)

/* POST */
/* Post es un metodo para recibir datos de un formulario */
//router.post('/addProduct', fileUploa.single('image'), controller.create)

router.post('/products', controller.agregarCart)
/*Hello para commit*/ 

/* ADMINISTRADOR */
router.get('/admin/dashboard', admin, controller.dashboard)
router.get('/admin/agregarProducto', admin, controller.agregarProducto)
router.post('/admin/agregarProducto', admin,fileUploa.single('image'), controller.create)
router.get('/admin/eliminarProducto', admin, controller.eliminarProducto)
router.get('/admin/editarProducto', admin, controller.editarProducto)

module.exports = router;

