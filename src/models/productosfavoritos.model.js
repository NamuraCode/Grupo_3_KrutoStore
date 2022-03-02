const req = require('express/lib/request')
const db = require('../database/models')

const metodosProductosFavoritos = {
    getAll: async function () {
        try{

            let productosFavoritos = await db.Productos_Favoritos.findAll({
                include:["usuario", "producto"]
            })
            return productosFavoritos
            
        }catch(error){
            console.log(error)
        }
    },
    create: async function(objet){
        try{
            let productosFavoritos = await db.Productos_Favoritos.create(objet)
            return productosFavoritos
        }catch(error){
            console.log(error)
        }
    },
    getOne: async ()=>{
        try{
            let productosFavoritos = await db.Productos_Favoritos.findOne({
                where:{
                    usuario_id:req.session.user.id
                }
            })
            return productosFavoritos
        }catch(error){
            console.log(error)
        }
    }
}


module.exports = metodosProductosFavoritos