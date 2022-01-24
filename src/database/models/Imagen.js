module.exports = (sequelize, dataTypes) => {
    const alias = "Imagenes"
    const colums = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        productos_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references:{
                model:"Productos",
                key:"id"
            }
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    const config = {
        tableName: "imagenes",
        timestamps: false
    }
    const Imagen = sequelize.define(alias, colums, config)
    return Imagen
}