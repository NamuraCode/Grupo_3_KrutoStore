const {productoModel} = require('../models')

const productController = {
    getAll: async (req, res, next) => {
        try {
            let producto = await productoModel.getAll(producto)
            res.render('products')
        } catch (error) {
            next(error);
        }
    },

    getOne: async (req, res, next) => {
        try {
            let producto = await productoModel.getOne(producto)
            res.render('productDetail')
        } catch (error) {
            next(error);
        }
    },

    agregarProducto: async(req, res, next) => {
        try {
            let producto = await productoModel.create(producto)
            res.render("agregarProducto", {title: "Agregar Producto"})
        } catch (error) {
            next(error);
        }
    },

    editarProducto: async (req, res, next) => {
        try{
            let producto = await productoModel.update(producto)
            res.render('editarProducto', {title: "Editar Producto"})
        } catch (error) {
            next(error);
        }
    },

}

module.exports = productController;