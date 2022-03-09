const usuariosController = require('./usuario.controller')
const productController = require('./product.controller')
const apiController = require('./api.controller')

let controller = {
    index: (req, res) => {
        try {
            let user;
            if(req.session.user){
                user = req.session.user.perfiles_id;
                console.log(req.session.user.perfiles_id);
            }
            if(user){
                res.render('index', {user})
            }else{
                res.render('index', {user})
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
    salir: (req, res)=>{
        res.clearCookie('user')
        req.session.destroy();
        res.redirect('/')
    }
}
module.exports = {
    controller,
    usuariosController,
    productController,
    apiController
}