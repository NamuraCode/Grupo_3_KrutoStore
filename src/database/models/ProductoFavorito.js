module.exports = function(sequelize, DataTypes) {

    const alias = "Productos_Favoritos"

    const colums = {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }

    const config = {
      tableName: 'productos_favoritos',
      timestamps: false,
    }

    const productos_favoritos = sequelize.define(alias, colums, config);

    productos_favoritos.associate = (modelos) => {
        productos_favoritos.hasMany(modelos.Usuarios, { 
            as: "usuario", 
            foreignKey: "usuario_id"
        });
        productos_favoritos.hasMany(modelos.Productos, {
            as: "producto", 
            foreignKey: "producto_id"
        });
    }

    return productos_favoritos

  };
  