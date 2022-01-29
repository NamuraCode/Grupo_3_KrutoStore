const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('perfiles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    perfil: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "Perfil_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'perfiles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "Perfil_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "perfil" },
        ]
      },
    ]
  });
};
