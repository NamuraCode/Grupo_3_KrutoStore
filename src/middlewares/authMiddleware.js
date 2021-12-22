function authMiddleware (req, res, next) {
    if (req.session.user != undefined && req.session.user.profile == 'admin'){
        
    }else{
        res.send('Esta pagina es solo para Administradores')
    }
}

module.exports = authMiddleware;
