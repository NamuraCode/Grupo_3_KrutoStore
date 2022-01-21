module.exports = (sequelize, DataTypes) => {
    let alias = 'Image'
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
        timestamps: false
    }

    let Image = sequelize.define(alias, colums, config)
    
    Image.associate = (models) => {
        Image.belongsTo(models.Producto, { 
            as: "Producto", 
            foreignKey: "Productos_id"});
    }

    return Image
}