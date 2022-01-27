const admin = require('./usuarios/adminSessionMiddleware')
const autenticacionRegistro = require('./usuarios/usuarioRegistradoMiddleware')
const registrado = require('./usuarios/usuarioNoRegistradoMiddleware')
const verificacionCookie = require('./usuarios/cokieAuthMiddleware')




module.exports = {
    //usuarios middleware
    admin,
    autenticacionRegistro,
    registrado,
    verificacionCookie
}