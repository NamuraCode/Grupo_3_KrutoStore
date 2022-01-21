module.exports = function (sequelize, DataTypes) {
  let alias = 'Favorito_Producto'
  let colums = {
    Productos_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Producto',
        key: 'id'
      }
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
    tableName: 'Favoritos_Productos',
    timestamps: false,
  }
  const ProductosFavoritos = sequelize.define(alias, colums, config);
  ProductosFavoritos.associate = (models) => {
    ProductosFavoritos.belongsTo(models.Proucto, {
      as: "Producto", 
      foreignKey: "Productos_id"
    })
    Favoritos_Productos.belongsTo(models.User, { 
      as: "User", 
      foreignKey: "Users_id"
    })
  } 
  return ProductosFavoritos
};