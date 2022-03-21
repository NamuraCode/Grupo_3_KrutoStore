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
        
    },
    getOne: async (query) =>{
        try{
            let todosLosGeneros = await db.Imagenes.findOne({
                where:{
                    id:query
                }
            })
            return todosLosGeneros
        }catch(error){
            console.log(`error ${error}`)
        }
    },
    update: async (what, where) =>{
        try{
            let todosLosGeneros = await db.Imagenes.update({
                image:what
            },
                {
                where:{
                    id:where
                }
            })
            return todosLosGeneros
        }catch(error){
            console.log(`error ${error}`)
        }
    },
    getAll: async ()=>{
        try{
            let all = await db.Imagenes.findAll()
            return all
        }catch(error){
            console.log(`error ${error}`)
        }
    }

}

module.exports = imagenesModels