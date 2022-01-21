module.exports = (sequelize, DataTypes) => {
    let alias = 'Producto'
    let colums = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Categorias_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                mode: 'Categorias',
                Key: 'id'
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        User_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        }
    }
    let config = {
        timestamps: false,
        tableName: 'Productos'
    }
    const Producto = sequelize.define(alias, colums, config)

    Producto.associate = (models) => {
        Producto.belongsToMany(models.User,{ 
            as: 'Users_id_Users', 
            through: Favoritos_Productos, 
            foreignKey: "Productos_id", 
            otherKey: "Users_id" 
        });
        Producto.belongsTo(models.Categorias, { 
            as: "Categoria", 
            foreignKey: "Categorias_id"
        });
        Producto.hasMany(models.Favoritos_Productos, { 
            as: "favoritos_productos", 
            foreignKey: "Productos_id"
        });
        Producto.hasMany(models.Images, { 
            as: "images", 
            foreignKey: "Productos_id"
        });
        Producto.belongsTo(models.Users, { 
            as: "User", 
            foreignKey: "Users_id"
        });

    }

    return Producto
}