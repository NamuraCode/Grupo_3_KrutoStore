module.exports = (sequelize, dataTypes) => {
    const alias ="Categorias"
    const colums = {
        id:{
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        categoria:{
            type: dataTypes.STRING,
            allowNull: false,
        }
    }
    const config = {
        tableName:"caregorias",
        timestamps: false
    }
    const Categoria = sequelize.define(alias, colums, config)
    return Categoria
}