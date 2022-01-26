const path = require('path');

const productosLogica = require(path.resolve(__dirname, './productos.model'))
const usuariosLogica = require(path.resolve(__dirname, './usuarios.model'))

module.exports = {
        productosLogica,
        usuariosLogica
}