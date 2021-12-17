/* Servidor Express */
const express = require('express');
const router = express.Router();
/* multer para cargar imagenes */ 
const multer = require('multer');
/* Path para las rutas */
const path = require('path')
/* Controller un objeto con metodos de respuesta (res) */
const controller = require('../controller/index.controller');
const products = require('../routers/products.routes')


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

/* Guardarlo en variable para llamarlo como middleware */
let fileUpload = multer({ storage: multerDiskStorage})

/* GET */
/* Get es un metodo HTTP para obtener las vistas y enviar datos no seguros de formulario */
router.get('/', controller.index);

router.get('/productCart', controller.productCart);

router.get('/products', controller.products)

router.get('/login', controller.login)

router.get('/productDetail/:id', controller.productDetail)

router.get('/register', controller.register)

router.get('/index', controller.index)

router.get('/productForm', controller.productForm)

router.get('/addProduct', controller.addProduct)

/* PUT */
/* Put es un metodo para editar datos de un formulario */
router.get('/editProduct/:id', controller.editProduct)

router.put('/editProduct/:id/edit', (req, res) => {
    res.render('login')
})

/* DELETE */
/* Delete es un metodo para elimiar datos de un formulario */
router.get('/removeProduct/:id', controller.removeProduct)

router.delete('/removeProduct/delete/:id', controller.deleteProduct)

/* POST */
/* Post es un metodo para recibir datos de un formulario */
router.post('/addProduct', fileUpload.single('image'), controller.create)

router.post('/products', controller.agregarCart)

module.exports = router;