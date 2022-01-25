const db = require("../database/models")

const usuarios = async () => {
    let resultados = await db.Usuarios.findAll()
    return resultados
}

console.log(usuarios())
module.exports = usuarios

