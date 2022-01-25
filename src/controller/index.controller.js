const path = require('path');
const productos = require('../data/product.json');
const favorites = require('../data/shoppingCart.json')
const usuarios = require('../data/users.json')
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models')
const {
    validationResult
} = require('express-validator');
const session = require('express-session');


controller = {
    index: (req, res) => {
        res.render('index')
    },
    productCart: (req, res) => {
        res.render('productCart', {
            favorite: favorites
        })
    },

    products: (req, res) => {
        res.render('products', {
            "ingresan": productos
        })
    },

    login: (req, res) => {
        res.render('login')
    },

    log: (req, res) => {
        const resultValidations = validationResult(req)
        if (resultValidations.errors.length > 0) {
            res.render('login', {
                errors: resultValidations.mapped(),
                oldData: req.body
            })

        } else {
            let nombre = req.body.username
            let contraseña = req.body.password
            //user => user.username == nombre && bcrypt.compareSync(contraseña, user.password)
            let usuario = db.Usuarios.findAll()
            req.session.user = usuario
            if (req.body.checkbox != undefined) {
                res.cookie('user', req.session.email, {
                    maxAge: 300000
                })
            }
            if (req.session.user == undefined) {
                res.render('login', {
                    errores: {
                        problemUser: 'Usuario no econtrado',
                        problemPass: 'Contraseña incorrecta'
                    }
                })
            } else {
                console.log(req.session.user)
                res.redirect('/index')
            }
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



    register: (req, res) => {
        const resultValidations = validationResult(req)
        if (resultValidations.errors.length > 0) {
            res.render('register', {
                errors: resultValidations.mapped(),
                oldData: req.body
            })

        } else {
            let p1 = req.body.password
            let p2 = req.body.coPassword
            console.log(req.file.filename)
            let register = {
                id: (usuarios.length + 1),
                username: req.body.username,
                email: req.body.email,
                image: '/images/avatars/' + req.file.filename,
                password: bcrypt.hashSync(req.body.password, 10),
                profile: "user",
            }
            if (p1 == p2) {
                let auth = usuarios.filter(function (user) {
                    user.email == req.body.email
                })

                if (auth == undefined) {
                    usuarios.push(register)
                    let useres = JSON.stringify(usuarios, null, 6)
                    fs.writeFileSync(path.join(__dirname, '../data/users.json'), useres)
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
        let id = req.params.id
        let producto = productos.find(productos => productos.id == id)
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

module.exports = controller;