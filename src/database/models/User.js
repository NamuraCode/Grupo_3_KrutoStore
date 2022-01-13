module.exports = (sequelize, DataTypes) => {
    let alias = "Users"
    let colums = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    let config = {
        tableName: "Users",
        timestamps: false
    }

    const User = sequelize.define(alias, colums, config)

    User.associate = function (models) {
        User.belongsTo(models.Perfil, {
            as: "Perfil",
            foreignKey: "Perfiles_id"
        })
    }

    return User
}