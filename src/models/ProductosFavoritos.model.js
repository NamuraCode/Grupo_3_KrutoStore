const db = require('../database/models')

const metodosProductosFavoritos = {
    getAll: async function () {
        try{

            let productosFavoritos = await db.productos_favoritos.findAll({include:["productos","usuarios"]})
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

module.exports = metodosProductosFavoritos