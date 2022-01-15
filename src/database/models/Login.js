module.exports = (sequelize, DataTypes) => {
    let alias = 'Logins'
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
    let login = sequelize.define(alias, colums, config)
    return login
}