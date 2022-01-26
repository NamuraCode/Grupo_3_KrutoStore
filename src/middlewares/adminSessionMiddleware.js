function authMiddleware (req, res, next) {
    if (req.session.user != undefined && req.session.user.perfiles_id == 1){
        next()
    }else{
        res.send('Esta pagina es solo para Administradores')
    }
}

module.exports = authMiddleware;
