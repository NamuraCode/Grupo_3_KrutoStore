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
    }
}

module.exports = metodosUsuarios