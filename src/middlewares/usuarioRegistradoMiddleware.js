const registrado = (req, res, next) => {
    //register
    req.session.user == undefined ? next() : res.render("/index") 
}