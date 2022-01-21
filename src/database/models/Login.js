module.exports = (sequelize, DataTypes) => {
    let alias = 'Login'
    let colums = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Users_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }
    let config = {
        timestamps: false,
        tableName: 'Logins'
    }
    const Login = sequelize.define(alias, colums, config)

    Login.associate = (models) => {
        Login.belongsTo(models.User, {
            as: "User", 
            foreignKey: "Users_id"
        })
    }

    return Login
}