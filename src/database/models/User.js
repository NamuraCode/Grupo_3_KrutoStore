module.exports = (sequelize, DataTypes) => {
    let alias = "User"
    let colums = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    let config = {
        tableName: "Users",
        timestamps: false
    }

    const User = sequelize.define(alias, colums, config)

    User.associate = function (models) {
        User.belongsTo(models.Perfil, {
            as: "Perfil",
            foreignKey: "Perfiles_id"
        })
        User.belongsToMany(models.Categoria, { 
            as: 'Categorias_id_Categoria', 
            through: Productos, 
            foreignKey: "Users_id", 
            otherKey: "Categorias_id" 
        });
        User.belongsToMany(models.Producto, { 
            as: 'Productos_id_Productos', 
            through: Favoritos_Productos, 
            foreignKey: "Users_id", 
            otherKey: "Productos_id" 
        });
        User.hasMany(models.Favorito_Producto, { 
            as: "favoritos_productos", 
            foreignKey: "Users_id"
        });
        User.hasMany(models.Login, { 
            as: "logins", 
            foreignKey: "Users_id"
        });
    }

    return User
}