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

    let Imagen = sequelize.define(alias, colums, config)
    
    Imagen.associate = (models) => {
        Imagen.belongsTo(models.Producto, { 
            as: "Producto", 
            foreignKey: "Productos_id"});
    }

    return Imagen
}