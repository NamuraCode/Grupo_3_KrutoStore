const models = require('../models');

const productController = {
    agregarProducto: async(req, res, next) => {
        try {
            let producto = await models.productoModel.create(producto)
            res.render("agregarProducto", {producto})
        } catch (error) {
            next(error);
        }
    }
}

module.exports = productController;