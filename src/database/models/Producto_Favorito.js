module.exports = (sequelize, dataTypes) => {
    const alias ="Productos_Favoritos"
    const colums = {
        Productos_id:{
            type: dataTypes.INTEGER,
            references: {
                model: Productos,
                key: "id"
            }
        },
        Users_id:{
            type:dataTypes.INTEGER,
            references:{
                model:Users,
                key:"id"
            }
        }
    }
    const config = {
        tableName:"Productos_Favoritos",
        timestamps: false
    }
    const Producto_Favorito = sequelize.define(alias, colums, config)
    return Producto_Favorito
}