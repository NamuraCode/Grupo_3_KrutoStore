module.exports = (sequelize, dataTypes) => {
    const alias = "Perfiles"
    const colums = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        perfil: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    const config = {
        tableName: "perfiles",
        timestamps: false
    }
    const Perfil = sequelize.define(alias, colums, config)
    return Perfil
}