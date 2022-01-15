const noRegistrado = (req, res, next) => {
    //register
    req.session.user != undefined ? next() : res.redirect("/register") 
}

module.exports = noRegistrado