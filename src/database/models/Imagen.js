module.exports = (sequelize, dataTypes) => {
    const alias = "Imagenes"
    const colums = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    const config = {
        tableName: "Imagenes",
        timestamps: false
    }
    const Imagen = sequelize.define(alias, colums, config)
    return Imagen
}