module.exports = (sequelize, DataTypes) => {
    let alias = "Perfiles"
    let colums = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        perfil:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    let config = {
        tableName: "Perfiles",
        timestamps: false
    }

    const Perfil = sequelize.define(alias, colums, config)

    Perfil.associate = function (models) {
        Perfil.hasMany(models.User, {
            as: "Users",
            foreignKey: "Perfiles_id"
        })
    }

    return Perfil
}