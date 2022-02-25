module.exports = (sequelize, DataTypes)=>{
    let alias = "Productos_Favoritos"

    let colums = {  
        usuario_id:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        producto_id:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
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