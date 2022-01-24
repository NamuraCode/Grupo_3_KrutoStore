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
        tableName:"categorias",
        timestamps: false
    }
    const Categoria = sequelize.define(alias, colums, config)
    Categoria.associate = (modelos) => {
        Categoria.hasMany(modelos.Productos, {
            as: "Productos",
            foreignKey: "categorias_id"
        })
    }
    return Categoria
}