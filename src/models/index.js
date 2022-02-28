const path = require('path');

const productosLogica = require(path.resolve(__dirname, './productos.model'))
const usuariosLogica = require(path.resolve(__dirname, './usuarios.model'))
const generosLogica = require(path.resolve(__dirname, './categorias.model'))
const imagenesLogica = require(path.resolve(__dirname, './imagenes.model'))
const FavoritosLogica = require(path.resolve(__dirname, './productosfavoritos.model'))
module.exports = {
        productosLogica,
        usuariosLogica,
        generosLogica,
        imagenesLogica,
        FavoritosLogica
}