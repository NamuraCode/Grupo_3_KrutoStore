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
    Perfil.associate = (modelos) => {
        Perfil.hasMany(modelos.Usuarios, {
            as: "Usuarios",
            foreignKey: "perfiles_id"
        })
    }
    return Perfil
}