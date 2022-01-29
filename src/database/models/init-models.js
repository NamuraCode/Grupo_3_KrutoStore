var DataTypes = require("sequelize").DataTypes;
var _categorias = require("./categorias");
var _imagenes = require("./imagenes");
var _perfiles = require("./perfiles");
var _productos = require("./productos");
var _productos_favoritos = require("./productos_favoritos");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var categorias = _categorias(sequelize, DataTypes);
  var imagenes = _imagenes(sequelize, DataTypes);
  var perfiles = _perfiles(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var productos_favoritos = _productos_favoritos(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  productos.belongsToMany(usuarios, { as: 'usuario_id_usuarios', through: productos_favoritos, foreignKey: "productos_id", otherKey: "usuario_id" });
  usuarios.belongsToMany(productos, { as: 'productos_id_productos', through: productos_favoritos, foreignKey: "usuario_id", otherKey: "productos_id" });
  productos.belongsTo(categorias, { as: "categoria", foreignKey: "categorias_id"});
  categorias.hasMany(productos, { as: "productos", foreignKey: "categorias_id"});
  productos.belongsTo(imagenes, { as: "imagene", foreignKey: "imagenes_id"});
  imagenes.hasMany(productos, { as: "productos", foreignKey: "imagenes_id"});
  usuarios.belongsTo(perfiles, { as: "perfile", foreignKey: "perfiles_id"});
  perfiles.hasMany(usuarios, { as: "usuarios", foreignKey: "perfiles_id"});
  productos_favoritos.belongsTo(productos, { as: "producto", foreignKey: "productos_id"});
  productos.hasMany(productos_favoritos, { as: "productos_favoritos", foreignKey: "productos_id"});
  productos.belongsTo(usuarios, { as: "usuario", foreignKey: "usuarios_id"});
  usuarios.hasMany(productos, { as: "productos", foreignKey: "usuarios_id"});
  productos_favoritos.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(productos_favoritos, { as: "productos_favoritos", foreignKey: "usuario_id"});

  return {
    categorias,
    imagenes,
    perfiles,
    productos,
    productos_favoritos,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
