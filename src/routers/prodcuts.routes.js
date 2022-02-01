const express = require('express');
const router = express.Router();
const { productController } = require('../controller')
const {admin, registrado, fileUploadProductos} = require('../middlewares')

/* This is a route that will call the productController and the productsList function. */
router.get('/products', productController.productsList)
router.post('/products', productController.agregarCart)


router.get('/productDetail/:id', productController.productDetail)


router.get('/productCart', registrado, productController.productCart);


router.get('/editarProducto', admin, productController.editarProducto)
router.put('/editProduct/:id', admin, fileUploadProductos.single('image'), productController.editProduct)


router.get('/eliminarProducto', admin, productController.eliminarProducto)
router.delete('/removeProduct/delete/:id', admin, productController.deleteProduct)


router.get('/agregarProducto', admin, productController.agregarProducto)
router.post('/addProduct', fileUploadProductos.single('image'), productController.create)


router.get('/admin/dashboard', admin, productController.dashboard)





module.exports = router