const express = require('express');
const router = express.Router();
const { productController } = require('../controller')
const {admin, registrado, fileUploadProductos, validationsProductCreate} = require('../middlewares')

/* This is a route that will call the productController and the productsList function. */
router.get('/products', productController.productsList)
router.post('/products', productController.agregarCart)


router.get('/productDetail/:id', productController.productDetail)


router.get('/productCart', registrado, productController.productCart);

router.get('/listaEditar', admin, productController.listProductsEdit)
router.get('/editarProducto/:id', admin, productController.editarProducto)
router.put('/editarProducto', admin, fileUploadProductos.single('image'), productController.editProduct)


router.get('/listaEliminar', admin, productController.listProductsDelete)
router.get('/eliminarProducto/:id', admin, productController.eliminarProducto)
router.delete('/eliminarProducto/:id/delete', admin, productController.deleteProduct)


router.get('/agregarProducto', admin, productController.agregarProducto)
router.post('/addProduct', fileUploadProductos.single('image'), productController.create)


router.get('/dashboard', admin, productController.dashboard)

module.exports = router