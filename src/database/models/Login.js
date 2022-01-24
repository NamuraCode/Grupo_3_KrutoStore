module.exports = (sequelize, dataTypes) => {
    const alias = "Logins"
    const colums = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        usuarios_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Usuarios",
                key: "id"
            }
        }
    }
    const config = {
        tableName: "logins",
        timestamps: false
    }
    const Login = sequelize.define(alias, colums, config)
    return Login
}