const {usuariosLogica} = require('../models')
const bcrypt = require('bcryptjs');

const usuariosController = {
    enviarVistaPerfil: (req, res) => {
        try {
            let session = req.session.user
            res.render('profile', {
                usuario: session
            })
        } catch (e) {
            res.render('error')
        }

    },
    actualizarDatosPerfil: (req, res) => {
        try {
            let session = req.session.user
            console.log(session.id, req.body.username, req.body.email, session.email, session.password)
            if(session != undefined){
                if(req.body.password != undefined){
                    usuariosLogica.editOne({
                        id:session.id,
                        username:req.body.username,
                        email:req.body.email,
                        password: bcrypt.hashSync(req.body.password, 10),
                        perfiles_id: session.perfiles_id
                    },{
                        where:{
                            email:session.email
                        }
                    })
                    console.log(session.email)
                    res.redirect('./perfil')
                }else{
                    usuariosLogica.editOne({
                        id:session.id,
                        username:req.body.username,
                        email:req.body.email,
                        password: session.password,
                        perfiles_id: session.perfiles_id
                    },{
                        where:{
                            email:session.email
                        }
                    })
                    console.log(session.email)
                    res.redirect('./perfil')
                }
            }
        } catch (e) {
            res.render('error')
        }
    },
    deleteUser: (req, res) => {
        try {
            usuariosLogica.deleteUser(req)
            res.clearCookie('user')
		    req.session.destroy();
            res.redirect('login')
        }catch(e){
            res.render('error')
        }

    },
    getIndex: (req,res) => {
        try{
            res.render('index')
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = usuariosController