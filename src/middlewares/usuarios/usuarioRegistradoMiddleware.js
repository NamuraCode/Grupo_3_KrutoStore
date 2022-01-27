const registrado = (req, res, next) => {
    //register
    req.session.user == undefined ? next() : res.redirect("/index") 
}

module.exports = registrado