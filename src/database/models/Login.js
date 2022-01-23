module.exports = (sequelize, dataTypes) => {
    const alias ="Logins"
    const colums = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    }
    const config = {
        tableName:"logins",
        timestamps: false
    }
    const Login = sequelize.define(alias, colums, config)
    return Login
}