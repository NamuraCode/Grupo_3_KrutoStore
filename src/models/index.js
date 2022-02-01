const path = require('path');

const productosLogica = require(path.resolve(__dirname, './productos.model'))
const usuariosLogica = require(path.resolve(__dirname, './usuarios.model'))
const generosLogica = require(path.resolve(__dirname, './categorias.model'))
module.exports = {
        productosLogica,
        usuariosLogica,
        generosLogica
}