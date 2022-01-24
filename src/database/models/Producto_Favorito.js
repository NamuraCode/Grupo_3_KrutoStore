module.exports = (sequelize, dataTypes) => {
    const alias ="Productos_Favoritos"
    const colums = {    
        id:{
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        producto_id:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        usuarios_id:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    }
    const config = {
        tableName:"productos_favoritos",
        timestamps: false
    }
    const Producto_Favorito = sequelize.define(alias, colums, config)
    Producto_Favorito.associate = (modelos) => {
        Producto_Favorito.belongsTo(modelos.Productos, {
            as:"productos",
            foreignKey: "productos_id"
        })
        Producto_Favorito.belongsTo(modelos.Usuarios, {
            as:"usuarios",
            foreignKey: "productos_id"
        })
    }
    return Producto_Favorito
}