const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos_favoritos', {
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    productos_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'productos_favoritos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
          { name: "productos_id" },
        ]
      },
      {
        name: "usuario_id_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "fk_productos_favoritos_productos1_idx",
        using: "BTREE",
        fields: [
          { name: "productos_id" },
        ]
      },
    ]
  });
};
