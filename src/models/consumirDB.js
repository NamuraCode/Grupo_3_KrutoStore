const db = require("../database/models")


db.Productos.findAll({include:["imagenes"]})
    .then(resultadoPromesa => console.log(resultadoPromesa))
    

