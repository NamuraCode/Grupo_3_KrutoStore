const bcrypt = require('bcryptjs');
const { usuariosLogica } = require('../models')
const { validationResult } = require('express-validator');

const usuariosController = {
    enviarVistaPerfil: async (req, res) => {
        try {
            let session = req.session.user
            let usuarioAEditar = await usuariosLogica.getOne({
                where:{
                    email: session.email
                }
            })
            res.render('perfil', {
                usuario: usuarioAEditar
            })
        } catch (e) {
            res.render('error')
        }

    },
    actualizarDatosPerfil: (req, res) => {
        console.log(req.file)
        try {
            let name = req.body.name && req.body.name.length >= 5 ? req.body.name : req.session.user.username;
            let correo = req.body.correo ? req.body.correo : req.session.user.email;
            let contrasena = req.body.password && req.body.password.length > 10 ? bcrypt.hashSync(req.body.password, 10) : req.session.user.password;
            let imagen = req.file != undefined ?  '/images/avatars/' + req.file.filename : req.session.user.image;
            
            usuariosLogica.editOne({
                username: name,
                email: correo,
                image: imagen,
                password: contrasena
                
            },{
                where:{
                    email: req.session.user.email
                }
            })
            
            res.redirect('./perfil')
        } catch (e) {
            res.render('error')
        }
    },
    deleteUser: (req, res) => {
        try {
            usuariosLogica.deleteUser(req, res)
            res.clearCookie('user')
            req.session.destroy();
            res.redirect('login')
        } catch (e) {
            res.render('error')
        }

    },
    getIndex: (req, res) => {
        try {
            res.render('index')
        } catch (error) {
            console.log(error)
        }
    },
    login: (req, res) => {
        res.render('login')
    },
    log: async (req, res) => {
        try {
            const resultValidations = validationResult(req)
            if (resultValidations.errors.length > 0) {
                return res.render('login', {
                    errors: resultValidations.mapped(),
                    oldData: req.body
                })
            } else {
                let nombreDeUsuarioBody = req.body.username
                let contrasenaUsuarioBody = req.body.password
                let respuestaFuncion = await usuariosLogica.getOne({
                    where: {
                        username: nombreDeUsuarioBody
                    }
                })
                if (respuestaFuncion) {
                    let contrasenaCorrecta = bcrypt.compareSync(contrasenaUsuarioBody, respuestaFuncion.password)
                    if (contrasenaCorrecta) {
                        req.session.user = respuestaFuncion
                        let session = req.session.user
                        if (req.body.checkbox != undefined) {
                            res.cookie('user', respuestaFuncion.email, {
                                maxAge: 300000
                            })
                            res.redirect('index')
                        } else {
                            res.redirect('index')
                        }
                    } else {
                        res.render('login', {
                            errores: {
                                problemUser: 'Usuario no econtrado',
                                problemPass: 'Contraseña incorrecta'
                            }
                        })
                    }
                } else {
                    res.render('login', {
                        errores: {
                            problemUser: 'Usuario no econtrado',
                            problemPass: 'Contraseña incorrecta'
                        }
                    })
                }
            }
        } catch (error) {
            res.status(401).render('error')
        }
    },
    register: async (req, res) => {
        try{
            const resultValidations = validationResult(req)
            if (resultValidations.errors.length > 0) {
                res.render('register', {
                    errors: resultValidations.mapped(),
                    oldData: req.body
                })

            } else {
                let p1 = req.body.password
                let p2 = req.body.coPassword
                if (p1 == p2) {
                    let auth
                    usuariosLogica.getOne({
                            where: {
                                email: req.body.email
                            }
                        })
                        .then(res => {
                            auth = res
                        })
                    if (auth == undefined) {

                        let bodyNombre = req.body.username;
                        let bodyEmail = req.body.email;
                        let bodyImage = req.file ? '/images/avatars/' + req.file.filename : '/images/avatars/52.png';
                        let bodyPassword = bcrypt.hashSync(req.body.password, 10);
                        
                        usuariosLogica.create(bodyNombre, bodyEmail, bodyImage, bodyPassword)

                        let usuario = usuariosLogica.getOne({
                            where: {
                                email: bodyEmail
                            }
                        })
                            
                        req.session.user = usuario
                        res.redirect('/index')
                        
                    } else {
                        res.render('register', {
                            problem: "El correo ya existe",
                            oldData: req.body
                        })
                    }

                } else {
                    res.render('register', {
                        problema: "Las contraseñas no son iguales",
                        oldData: req.body
                    })
                }
            }
        }catch(e){
            res.status(404).render(`error: ${e}`)
        }
    },
    regi: (req, res) => {
        res.render('register')
    }
}

module.exports = usuariosController