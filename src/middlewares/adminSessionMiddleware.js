function authMiddleware(req, res, next) {
    try {
        if (req.session.user != undefined && req.session.user.perfiles_id == 1) {
            next()
        } else {
            res.send('Esta pagina es solo para Administradores')
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authMiddleware;