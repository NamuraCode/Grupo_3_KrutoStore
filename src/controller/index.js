const usuariosController = require('./usuario.controller')
const productController = require('./product.controller')

let controller = {
    index: (req, res) => {
            res.render('index')
    },
    aboutUs: (req, res) => {
        res.render('aboutUs')
    },
    opcionesPagos: (req, res) => {
        res.render('opcionesPagos')
    },
    opcionesEnvios: (req, res) => {
        res.render('opcionesEnvios')
    },
    politicaDevoluciones: (req, res) => {
        res.render('politicaDevoluciones')
    },
    dashboard: (req, res) => {
        res.render('dashboard')
    },
}
module.exports = {
    controller,
    usuariosController,
    productController
}