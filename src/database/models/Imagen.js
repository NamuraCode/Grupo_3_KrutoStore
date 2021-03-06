module.exports = (sequelize, dataTypes) => {
    const alias = "Imagenes"
    const colums = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
    Imagen.associate = (modelos) => {
        Imagen.hasMany(modelos.Productos, {
            as: "productos",
            foreignKey: "imagenes_id"
        })
    }
    return Imagen
}