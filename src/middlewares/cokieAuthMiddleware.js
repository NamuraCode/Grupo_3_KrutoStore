const fs = require('fs');
const usuarios = require('../data/users.json')
function cookieAuth (req, res, next){
    next()
    if (req.cookies.user != undefined && req.session.user == undefined){
        let find = usuarios.find(user => user.email == req.cookies.user)
        if (find != undefined){
            req.session.user = find
        }
    }
}

module.exports = cookieAuth