module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios"
    let colums = {
        id: {
            type:dataTypes.INTEGER,
            primaryKey:true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type:dataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:dataTypes.STRING,
            allowNull: false,
        },
        password:{
            type:dataTypes.STRING,
            allowNull: false,
        }

    }
    let config = {
        tableName: "Usuarios",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, colums, config)
    return Usuario
}