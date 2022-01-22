module.exports = (sequelize, dataTypes) => {
    const alias = "Productos"
    const colums = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        categorias_id: {
            type: dataTypes.INTEGER,
        },
        price:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        User_id:{
            type: dataTypes.INTEGER,
        }
    }
    const config = {
        tableName: "Productos",
        timestamps: false
    }
    const Producto = sequelize.define(alias, colums, config)
    return Producto
}