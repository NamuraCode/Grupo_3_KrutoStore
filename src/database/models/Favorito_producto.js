module.exports = function (sequelize, DataTypes) {
  let alias = 'Favoritos_Productos'
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
  const productosFavoritos = sequelize.define(alias, colums, config);
  return productosFavoritos
};