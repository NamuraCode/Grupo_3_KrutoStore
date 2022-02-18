const { productosLogica, generosLogica, imagenesModels } = require('../models')

const apiController = {
    listaProductos: async(req, res)=>{
        let listaproductos = await productosLogica.getAll()
        res.json(listaproductos)
    }
}


module.exports = apiController