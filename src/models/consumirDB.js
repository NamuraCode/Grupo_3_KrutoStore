const db = require("../database/models")

const consumirDbAll = async () => {
    let promesa = await db.Productos.findAll()
    let resultadoPromesa = await promesa
    return resultadoPromesa
}

console.log(consumirDbAll())