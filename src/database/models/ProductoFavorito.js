module.exports = function(sequelize, DataTypes) {

    let alias = "Productos_Favoritos"

    let colums = {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      producto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'productos',
          key: 'id'
        }
      }
    }

    let config = {
      tableName: 'productos_favoritos',
      timestamps: false,
    }

    let productos_favoritos = sequelize.define(alias, colums, config);

    productos_favoritos.associate = (modelos) => {
        // productos_favoritos.hasMany(modelos.Usuarios, { 
        //     as: "usuario", 
        //     foreignKey: "usuario_id"
        // });
        // productos_favoritos.hasMany(modelos.Productos, {
        //     as: "producto", 
        //     foreignKey: "producto_id"
        // });
    }

    return productos_favoritos

  };
  