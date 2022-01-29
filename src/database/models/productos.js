const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    categorias_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categorias',
        key: 'id'
      }
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    usuarios_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    imagenes_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'imagenes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "categorias_id" },
          { name: "usuarios_id" },
          { name: "imagenes_id" },
        ]
      },
      {
        name: "fk_productos_categorias1_idx",
        using: "BTREE",
        fields: [
          { name: "categorias_id" },
        ]
      },
      {
        name: "fk_productos_usuarios2_idx",
        using: "BTREE",
        fields: [
          { name: "usuarios_id" },
        ]
      },
      {
        name: "fk_productos_imagenes1_idx",
        using: "BTREE",
        fields: [
          { name: "imagenes_id" },
        ]
      },
    ]
  });
};
