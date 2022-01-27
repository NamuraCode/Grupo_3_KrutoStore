const fs = require('fs');
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
<<<<<<< HEAD

    newProductos: async function (Producto, files) {
        try {
            const images = [];

            if (files["imagesUpload"]) {
                images = files["imagesUpload"].map((image) => {
                    return image.filename;
                });
            }

            await db.Productos.create({
                productName: Producto.nombre,
                productCategory: Producto.categorias_id,
                productPrice: Producto.precio,
                productDescription: Producto.descripcion
            })
        } catch (error) {
            console.error(error);}
    },
    editProductos: async function (Producto) {
        try {
            await db.Productos.edit({
                productName: Producto.nombre,
                productCategory: Producto.categorias_id,
                productPrice: Producto.precio,
                productDescription: Producto.descripcion
            })
        } catch (error) {
            console.error(error);
        }
    },
    deleteProductos: async function (id) {
        try {
            await db.Productos.destroy({where: {id:id}})
        } catch (error) {
            console.error(error);
=======
    getOne: async function (query) {
        try {
            
        } catch (error) {
            console.log()
>>>>>>> bf7e6a3e162b4aab373c4c748c5a4c341f4be22d
        }
    }
}

module.exports = metodosProductos