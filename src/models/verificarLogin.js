//Encontrar, usuario en la base de datos y guardarlo en variable
//necesita, body.checkbox 
//session.user que exista
//
let logueo = () => {

}

let checkbox = (req, res, bodyCheckbox, sessionEmail) => {
    if(bodyCheckbox != undefined){
        return res.cookie('user', sessionEmail, {
            maxAge: 30000
        })
    }else{
        next()
    }
}

module.exports = checkbox