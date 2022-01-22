module.exports = (sequelize, dataTypes) => {
    const alias = "Productos"
    const colums = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        precio:{
            type:dataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {
        tableName: "Productos",
        timestamps: false
    }
    const Producto = sequelize.define(alias, colums, config)
    return Producto
}