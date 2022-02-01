const db = require('../database/models')

const generosModels = {
    getAll: async (where) => {
        try{
            let todosLosGeneros = await db.Categorias.findOne(where)
            return todosLosGeneros
        }catch(error){
            console.log(`error ${error}`)
        }
        
    }
}

module.exports = generosModels