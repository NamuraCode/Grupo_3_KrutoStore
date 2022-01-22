module.exports = (sequelize, dataTypes) => {
    const alias ="Logins"
    const colums = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        User_id:{
            type: dataTypes.INTEGER(11),
        }
    }
    const config = {
        tableName:"Logins",
        timestamps: false
    }
    const Login = sequelize.define(alias, colums, config)
    return Login
}