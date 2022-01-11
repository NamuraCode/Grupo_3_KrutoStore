module.exports= (sequelize, dataTypes) => {
    const alias =  'User',
    const cols = { 
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password:{
            dataTypes: dataTypes.STRING(100),
            allowNull: false
        }
    }
    const config = {
        tablename: "Users",
        timestamps: true,
        
    }
    const User = sequelize.define(alias, cols, config)
    return User
}