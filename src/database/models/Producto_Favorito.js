module.exports = (sequelize, dataTypes) => {
    const alias ="Productos_Favoritos"
    const colums = {
    }
    const config = {
        tableName:"Productos_Favoritos",
        timestamps: false
    }
    const Producto_Favorito = sequelize.define(alias, colums, config)
    return Producto_Favorito
}