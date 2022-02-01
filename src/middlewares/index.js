const admin = require('./usuarios/adminSessionMiddleware')
const autenticacionRegistro = require('./usuarios/usuarioRegistradoMiddleware')
const registrado = require('./usuarios/usuarioNoRegistradoMiddleware')
const verificacionCookie = require('./usuarios/cokieAuthMiddleware')
const {fileUploadProductos, fileUploadAvatars} = require('./multer.Middleware')
const {validationsRegister, validationLogin, validationsProductCreate} = require('./validations.middleware')




module.exports = {
    //usuarios middleware
    admin,
    autenticacionRegistro,
    registrado,
    verificacionCookie,
    fileUploadProductos,
    fileUploadAvatars,
    validationsRegister,
    validationLogin,
    validationsProductCreate

}