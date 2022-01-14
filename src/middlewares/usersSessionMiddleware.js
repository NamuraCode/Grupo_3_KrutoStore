function guestMiddleware (req, res, next) {
    if (req.session.user == undefined){
        next()
    }else{
        res.send('Esta pagina es solo para Usuarios')
    }
}

module.exports = guestMiddleware;