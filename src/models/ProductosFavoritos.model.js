const db = require('../database/models')

const metodosProductosFavoritos = {
    getAll: async function () {
        try{

            let productosFavoritos = await db.productos_favoritos.findAll()
            return productosFavoritos

        }catch(error){
            console.log(error)
        }
    }
}

module.exports = metodosProductosFavoritos