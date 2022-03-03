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
    getOne: async (usuarioId)=>{
        try{
            let productosFavoritos = await db.Productos_Favoritos.findAll({include:["usuario", "producto"]},{
                where:{
                    usuario_id:usuarioId
                }
            })
            return productosFavoritos
        }catch(error){
            console.log(error)
        }
    },
    createOne: async (usuario, producto)=>{
        try{
            let productoCreado = await db.Productos_Favoritos.create({
                usuario_id:usuario,
                producto_id:producto
            })
            return productoCreado
        }catch(error){
            console.log(error)
        }
    },
    eliminar: (idParams)=> {
        try{
            db.Productos_Favoritos.destroy(idParams)
        }catch(error){
            console.log(error)
        }
    }
}


module.exports = metodosProductosFavoritos