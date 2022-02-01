const db = require('../database/models')

const generosModels = {
    getAll: async () => {
        try{
            let todosLosGeneros = await db.Categorias.findAll()
            return todosLosGeneros
        }catch(error){
            console.log(`error ${error}`)
        }
        
    }
}

module.exports = generosModels