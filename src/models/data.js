const db = require("../database/models")

let usuario = db.Usuarios.findAll()
    .then(res => res)


console.log(usuario)


