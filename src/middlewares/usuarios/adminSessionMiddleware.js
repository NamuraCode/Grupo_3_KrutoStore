function authMiddleware(req, res, next) {
    try {
        if (req.session.user != undefined && req.session.user.perfiles_id == 1) {
            next()
        } else {
            res.render('register')
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authMiddleware;