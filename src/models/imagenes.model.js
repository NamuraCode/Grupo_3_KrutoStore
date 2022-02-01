const db = require('../database/models')

const imagenesModels = {
    create: async (string) => {
        try{
            let todosLosGeneros = await db.Imagenes.create({
                image: string
            })
            return todosLosGeneros
        }catch(error){
            console.log(`error ${error}`)
        }
        
    }
}

module.exports = imagenesModels