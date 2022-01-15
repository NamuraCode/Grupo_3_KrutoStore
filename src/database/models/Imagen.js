module.exports = (sequelize, DataTypes) => {
    let alias = 'Imagen'
    let colums = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Productos_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Productos',
                key: 'id'
            }
        },
        Image: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }
    let config = {
        tableName= 'Images',
        timestamps: false
    }

    let imagen = sequelize.define(alias, colums, config)
    return imagen
}