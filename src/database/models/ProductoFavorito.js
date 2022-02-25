module.exports = (sequelize, DataTypes)=>{
    let alias = "Productos_Favoritos"

    let colums = {  
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true
        },
        usuario_id:{
            type:DataTypes.INTEGER
        },
        producto_id:{
            type:DataTypes.INTEGER
        }
    }

    let config = {
        tableName: "productos_favoritos",
        timestamps: false
    }
    const productosFavortios = sequelize.define(alias, colums, config)

    productosFavortios.associate = (modelos) => {
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