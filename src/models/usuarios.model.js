const db = require('../database/models');

const metodosUsuarios = {
    getOne: async function (where) {
        try {
            let usuarios = await db.usuarios.findOne(where)
            return usuarios
        } catch (error) {
            return console.log(error)
        }
    }
}

module.exports = metodosUsuarios