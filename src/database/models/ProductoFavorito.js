module.exports = (sequelize, dataTypes) => {
    let alias = "Productos_Favoritos"

    let colums = {  
        id:{
            type:dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        usuario_id:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        producto_id:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
    }

    let config = {
        tableName: "productos_favoritos",
        timestamps: false
    }

    const productosFavortios = sequelize.define(alias, colums, config)

    productosFavortios.associate =(modelos) => {
        productosFavortios.belongsTo(modelos.Productos, {
            as: "productos",
            foreignKey: "producto_id"
        })
        productosFavortios.belongsTo(modelos.Usuarios, {
            as: "usuarios",
            foreignKey: "usuario_id"
        })
    }

    return productosFavortios
}