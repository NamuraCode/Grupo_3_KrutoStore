const path = require('path');
const productos = require('../model/product.json');
const favorites = require('../model/shoppingCart.json')
const usuarios = require('../model/users.json')
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const products = require('../model/users.json');
const { validationResult } = require('express-validator');
const session = require('express-session');
const { createUser } = require('./usersController');
const user = require('./usersController');

controller = {
    index: (req, res) => {
        res.render('index')
    },

    productCart: (req, res) => {
        res.render('productCart')
    },

    products: (req, res) => {
        res.render('products', {
            "ingresan": productos
        })
    },

    login: (req, res) => {
        res.render('login')
    },

    productDetail: (req, res) => {
        let id = req.params.id
        console.log(id)
        res.render('productDetail', {
            "ingresan": productos,
            "id": id
        })
    },

    aboutUs: (req, res) => {
        res.render('about')
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

    register: (req, res) => {
        let register = {
            id: (usuarios.length +1),
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }
        usuarios.push(register) 
        let useres = JSON.stringify(usuarios, null, 6)
        fs.writeFileSync(path.join(__dirname, '../model/users.json'), useres)
        // console.log(register);
        res.redirect('/index')
    },

    regi: (req, res) => {
        res.render('register')
    },

    /* productos.push(create)
        const producto = JSON.stringify(productos, null, 6)
        fs.writeFileSync(path.join(__dirname, '../model/product.json'), producto)
        console.log(create)
        res.redirect('/products') */

    addProduct: (req, res) => {
        res.render('addProduct')
    },

    editProduct: (req, res) => {
        let id = req.params.id
        let producto = productos.find(productos => productos.id == id)
        res.render('editProduct', {product: producto})
    },

    edit:(req, res) => {
        let id = req.params.id
        for (let i = 0; i <productos.length; i++) {
            if(productos[i].id == id){
                productos[i].name = req.body.name,
                productos[i].description = req.body.description,
                productos[i].image = '/images/products/' + req.body.image,
                productos[i].category = req.body.category,
                productos[i].price = req.body.price
            }
        }
        let producto = JSON.stringify(productos, null, 4);
        fs.writeFileSync(path.join(__dirname, '../model/product.json'), producto)
        res.redirect('/products')
    },

    removeProduct: (req, res) => {
        let id = req.params.id
        let elementToDelete = productos.find(productos => productos.id == id)
        res.render('removeProduct',{product:elementToDelete})
    },

    deleteProduct: (req, res) => {
        let id = req.params.id
        let productoTodelete = productos.filter(producto => producto.id != id)
        let producto = JSON.stringify(productoTodelete, null, 6)
        fs.writeFileSync(path.join(__dirname, '../model/product.json'), producto)
        console.log(productoTodelete)
        res.redirect('/products')

    },

    create: (req, res) => {
        let create = {
            id: (productos.length + 1),
            name: req.body.product,
            image: '/images/avatars/' + req.file.filename,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        };
        productos.push(create)
        const producto = JSON.stringify(productos, null, 6)
        fs.writeFileSync(path.join(__dirname, '../model/product.json'), producto)
        console.log(create)
        res.redirect('/products')
    },

    agregarCart: (req, res) => {
        let id = req.body.id
        let favorite = productos.find(element => element.id == id);
        console.log(favorite)
        productos.push(favorite)
        let favor = JSON.stringify(favorite, null, 6)
        fs.writeFileSync(path.join(__dirname, '../model/shoppingCart.json'), favor)
        res.redirect('/productCart')
    }
}

module.exports = controller;