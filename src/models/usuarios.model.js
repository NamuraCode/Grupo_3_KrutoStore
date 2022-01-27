const res = require('express/lib/response')
const db = require('../database/models')

const metodosUsuarios = {
    getOne: async function (where) {
        try {
            let usuarios = await db.Usuarios.findOne(where)
            return usuarios
        } catch (error) {
            return console.log(error)
        }
    },
    editOne: async function (what, where) {
        try {
            let todos = await db.Usuarios.update(what, where)
            return todos
        } catch (e) {
            return console.log(e)
        }
    },
    deleteUser: async function (req){
        try {
            let user = req.session.user 
            let usuarios = await db.Usuarios.destroy({
                where:{
                    id:user.id
                }
            })
            return usuarios
        }catch(e){
            return console.log(e)
        }
    },
    getAll: async () => {
        try{
            let todos = await db.Usuarios.findAll()
            return todos
        }catch(e){
            return console.log(e)
        }       
    }
}

module.exports = metodosUsuarios