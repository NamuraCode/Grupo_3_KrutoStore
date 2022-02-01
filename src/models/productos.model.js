const path = require('path');
const db = require('../database/models')

const metodosProductos = {
    getAll: async function () {
        try {
            let productos = await db.Productos.findAll({
                include: ["categorias", "usuarios", "imagenes"]
            })
            return productos
        } catch (error) {
            return console.log(error)
        }
    },

    newProductos: async function (Producto) {
        try {
            // const images = [];

            // if (files["imagesUpload"]) {
            //     images = files["imagesUpload"].map((image) => {
            //         return image.filename;
            //     });
            // }
            await db.Productos.create(Producto)
        } catch (error) {
            console.error(error);}
    },
    editProductos: async function (what, where) {
        try {
            // const images = [];

            // if (files["imagesUpload"]) {
            //     images = files["imagesUpload"].map((image) => {
            //         return image.filename;
            //     });
            // }

            await db.Productos.update(what, where)
        } catch (error) {
            console.error(error);
        }
    },
    deleteProductos: async function (idParams) {
        try {
            await db.Productos.destroy({where: {id:idParams}})
        } catch (error) {
            console.error(error);
        }
    },
    getDetail: async (id) => {
        try{
            let getOne = await db.Productos.findByPk(id)
            return getOne
        }catch(e){
            console.error(e)
        }
    }
}

module.exports = metodosProductos