const path = require('path');
const usuariosController = require('./usuario.controller')
const productController = require('./product.controller')
const productos = require('../data/product.json');
const favorites = require('../data/shoppingCart.json')
const db = require('../database/models')
const {productosLogica, usuariosLogica} = require('../models')
const fs = require('fs');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const session = require('express-session');
const {nextTick} = require('process');
const {redirect} = require('express/lib/response');


controller = {
    index: async (req, res) => {
            res.render('index')
    },
    productCart: (req, res) => {
        res.render('productCart', {
            favorite: favorites
        })
    },

    products: (req, res) => {
        db.Productos.findAll({
                include: ["imagenes"]
            })
            .then(ingresan => {
                console.log(ingresan[1].imagenes.image)
                res.render('products', {
                    ingresan
                })
            })
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
                        // errores: {
                        //     problemUser: 'Usuario no econtrado',
                        //     problemPass: 'Contraseña incorrecta'
                        // }
                        // if (req.body.checkbox != undefined) {
                        //     res.cookie('user', usuario, {
                        //     maxAge: 300000
                        //     })
                        // }
            } else {
                let nombreDeUsuarioBody = req.body.username
                let contrasenaUsuarioBody = req.body.password
                let respuestaFuncion = await usuariosLogica.getOne({
                    where: {username : nombreDeUsuarioBody}
                })
                if(respuestaFuncion != null){
                    let contrasenaCorrecta = bcrypt.compareSync(contrasenaUsuarioBody, respuestaFuncion.password)
                    if(contrasenaCorrecta ){
                        req.session.user = respuestaFuncion
                        if (req.body.checkbox != undefined) {
                            res.cookie('user', respuestaFuncion.email, {
                                maxAge: 300000
                            })
                            res.redirect('/')
                        }else{
                            res.redirect('./index')
                        }
                    }else {
                        res.render('login', {
                            errores: {
                                problemUser: 'Usuario no econtrado',
                                problemPass: 'Contraseña incorrecta'
                            }
                        })
                    }
                }else {
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

    productDetail: (req, res) => {
        let id = req.params.id
        let producto = productos.find(producto => producto.id == id)
        res.render('productDetail', {
            ingresan: producto
        })
    },

    aboutUs: (req, res) => {
        res.render('aboutUs')
    },

    opcionesPagos: (req, res) => {
        res.render('opcionesPagos')
    },

    opcionesEnvios: (req, res) => {
        res.render('opcionesEnvios')
    },

    politicaDevoluciones: (req, res) => {
        res.render('politicaDevoluciones')
    },

    dashboard: (req, res) => {
        res.render('dashboard')
    },

    editarProducto: (req, res) => {
        res.render('editarProducto')
    },

    eliminarProducto: (req, res) => {
        res.render('eliminarProducto')
    },

    agregarProducto: (req, res) => {
        res.render('agregarProducto')
    },

    register: async (req, res) => {
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
                db.Usuarios.findAll({
                        where: {
                            email: req.body.email
                        }
                    })
                    .then(res => {
                        auth = res
                    })
                //let auth = usuarios.filter(function (user) {
                //user.email == req.body.email
                //})

                if (auth == undefined) {
                    let todosLosUsuarios = await usuariosLogica.getAll()
                    let ultimoUsuario = await usuariosLogica.getAll({
                        where:{
                            id:todosLosUsuarios
                        }
                    })
                    let usuario = {
                        id: ultimoUsuario.id,
                        username: req.body.username,
                        email: req.body.email,
                        image: '/images/avatars/' + req.file.filename,
                        password: bcrypt.hashSync(req.body.password, 10),
                        perfiles_id: 2,
                    }
                    db.Usuarios.create({
                        username: req.body.username,
                        email: req.body.email,
                        image: '/images/avatars/' + req.file.filename,
                        password: bcrypt.hashSync(req.body.password, 10),
                        perfiles_id: 2,
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
    },

    regi: (req, res) => {
        res.render('register')
    },

    /* productos.push(create)
        const producto = JSON.stringify(productos, null, 6)
        fs.writeFileSync(path.join(__dirname, '../data/product.json'), producto)
        console.log(create)
        res.redirect('/products') */

    addProduct: (req, res) => {
        res.render('addProduct')
    },

    editProduct: (req, res) => {
        let idABuscar = req.params.id
        let producto

        db.Productos.findAll({
                where: {
                    id: idABuscar
                }
            })
            .then(res => {
                producto = res
            })

        res.render('editProduct', {
            product: producto
        })
    },

    edit: (req, res) => {
        let id = req.params.id
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id == id) {
                productos[i].name = req.body.name,
                productos[i].description = req.body.description,
                productos[i].image = '/images/productos/' + req.file.filename,
                productos[i].category = req.body.category,
                productos[i].price = req.body.price
            }
        }
        let producto = JSON.stringify(productos, null, 4);
        fs.writeFileSync(path.join(__dirname, '../data/product.json'), producto)
        res.redirect('/products')
    },

    removeProduct: (req, res) => {
        let id = req.params.id
        let elementToDelete = productos.find(productos => productos.id == id)
        res.render('removeProduct', {
            product: elementToDelete
        })
    },

    deleteProduct: (req, res) => {
        let id = req.params.id
        let productoTodelete = productos.filter(producto => producto.id != id)
        let producto = JSON.stringify(productoTodelete, null, 6)
        fs.writeFileSync(path.join(__dirname, '../data/product.json'), producto)
        console.log(productoTodelete)
        res.redirect('/products')

    },

    create: (req, res) => {
        let create = {
            id: (productos.length + 1),
            name: req.body.product,
            image: '/images/productos/' + req.file.filename,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        };
        productos.push(create)
        const producto = JSON.stringify(productos, null, 6)
        fs.writeFileSync(path.join(__dirname, '../data/product.json'), producto)
        console.log(create)
        res.redirect('/products')
    },

    agregarCart: (req, res) => {
        let id = req.body.id
        let favorite = productos.find(element => element.id == id);
        console.log(favorite)
        favorites.push(favorite)
        let favor = JSON.stringify(favorites, null, 6)
        fs.writeFileSync(path.join(__dirname, '../data/shoppingCart.json'), favor)
        res.redirect('/productCart')
    }
}

module.exports = {
    controller,
    usuariosController,
    productController
}