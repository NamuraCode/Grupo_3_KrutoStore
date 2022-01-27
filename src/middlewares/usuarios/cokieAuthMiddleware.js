const {
    usuariosLogica
} = require('../../models')

const cookieAuth = async function (req, res, next) {
    try {
        if (req.cookies.user != undefined && req.session.user == undefined) {
            let usuarioEncontrado = await usuariosLogica.getOne({
                    where: {
                        email: req.cookies.user
                    }
                })
            if (usuarioEncontrado != undefined) {
                req.session.user = usuarioEncontrado
                next()
            }
        } else {
            next()
        }
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

module.exports = cookieAuth