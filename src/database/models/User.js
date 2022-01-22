module.exports = (sequelize, dataTypes) => {
    const alias = "Users"
    const colums = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: dataTypes.STRNG,
            allowNull: false,
        },
        email:{
            type: dataTypes.STRNG,
            allowNull: false,
        },
        image:{
            type: dataTypes.STRNG,
            allowNull: false,
        },
        password:{
            type: dataTypes.STRNG,
            allowNull: false,
        },
        perfiles_id:{
            type:dataTypes.INTEGER,
            references:{
                model: Perfiles,
                key:"id"
            }
        }

    }
    const config = {
        tableName: "Users",
        timestamps: false
    }
    const User = sequelize.define(alias, colums, config)
    return User
}