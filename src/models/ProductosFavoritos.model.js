const db = require('../database/models')

const metodosProductosFavoritos = {
    getAll: async function () {
        try{

            let productosFavoritos = await db.Productos_Favoritos.findAll()
            return productosFavoritos
            
        }catch(error){
            console.log(error)
        }
    },
    create: async function(objet){
        try{
            let productosFavoritos = await db.productos_favoritos.create(objet)
            return productosFavoritos
        }catch(error){
            console.log(error)
        }
    }
}

metodosProductosFavoritos.getAll()

module.exports = metodosProductosFavoritos