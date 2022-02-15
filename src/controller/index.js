const usuariosController = require('./usuario.controller')
const productController = require('./product.controller')
const session = require('express-session')

let controller = {
    index: (req, res) => {
        try {
            if(req.session.user!=undefined){
                let user={
                    perfil:req.session.user.perfiles_id,
                    image:req.session.user.image
                }
                res.render('index', {user})
            }else{
                res.render('index')
            }
        } catch (error) {
            console.log(error)
        }
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