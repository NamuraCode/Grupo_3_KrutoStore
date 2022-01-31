const db = require('../database/models');

const productoModel = {
    getAll: async () => {
        try {
            const result = await db.productos.findAll()
            return result;
        }catch (error) {
            console.log(error);
        }
    },
    getOne: async (id) => {
        try {
            const result = await db.productos.findByPk(id)
            return result;
        }catch (error) {
            console.log(error);
        }
    },
    create: async (producto) => {
        try {
            const result = await db.productos.create(producto)
            return result;
        }catch (error) {
            console.log(error);
        }
    },
    update: async (producto) => {
        try {
            const result = await db.productos.update(producto)
            return result;
        }catch (error) {
            console.log(error);
        }
    },
    delete: async (id) => {
        try {
            const result = await db.productos.destroy({where: {id:id}})
            return result;
        } catch (error) {
            next(error)
        }
    },
};




// const metodosProductos = {
//     getAll: async function () {
//         try {
//             let productos = await db.Productos.findAll({
//                 include: ["categorias", "usuarios", "imagenes"]
//             })
//             return productos
//         } catch (error) {
//             return console.log(error)
//         }
//     },

//     newProductos: async function (Producto, files) {
//         try {
//             const images = [];

//             if (files["imagesUpload"]) {
//                 images = files["imagesUpload"].map((image) => {
//                     return image.filename;
//                 });
//             }

//             await db.Productos.create({
//                 productName: Producto.nombre,
//                 productCategory: Producto.categorias_id,
//                 productPrice: Producto.precio,
//                 productDescription: Producto.descripcion
//             })
//         } catch (error) {
//             console.error(error);}
//     },
//     editProductos: async function (Producto) {
//         try {
//             await db.Productos.edit({
//                 productName: Producto.nombre,
//                 productCategory: Producto.categorias_id,
//                 productPrice: Producto.precio,
//                 productDescription: Producto.descripcion
//             })
//         } catch (error) {
//             console.error(error);
//         }
//     },
//     deleteProductos: async function (id) {
//         try {
//             await db.Productos.destroy({where: {id:id}})
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }

module.exports = productoModel