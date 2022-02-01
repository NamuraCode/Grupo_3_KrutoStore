const res = require('express/lib/response')
const db = require('../database/models')

const metodosUsuarios = {
    getOne: async function (where) {
        try {
            let usuarios = await db.Usuarios.findOne(where)
            return usuarios
        } catch (error) {
            return console.log(error.message)
        }
    },
    editOne: async function (what, where) {
        try {
            let todos = await db.Usuarios.update(what, where)
            return todos
        } catch (e) {
            return console.log(e.message)
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
            return console.log(e.message)
        }
    },
    getAll: async () => {
        try{
            let todos = await db.Usuarios.findAll()
            return todos
        }catch(e){
            return console.log(e.message)
        }       
    },
    getId: async (id) => {
        try{
            let usuarioBuscadoPorId = await db.Usuarios.findByPk(id)
            return usuarioBuscadoPorId
        }catch(error){
            return console.log(error.message)
        }
    },
    create: async (usernameParam, emailParam, imageParam, passwordParam) => {
        try{
            db.Usuarios.create({
                username: usernameParam,
                email: emailParam,
                image: imageParam,
                password: passwordParam,
                perfiles_id: 2,
            })

        }catch{
            return console.log(error.message)
        }
    }
}

module.exports = metodosUsuarios