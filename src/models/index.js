const path = require('path');
require('dotenv').config();

const productModel = require(path.resolve(__dirname, './productos.model'))
const usuariosLogica = require(path.resolve(__dirname, './usuarios.model'))

module.exports = {
        productModel,
        usuariosLogica
}