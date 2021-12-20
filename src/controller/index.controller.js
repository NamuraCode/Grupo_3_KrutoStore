const path = require('path');
const productos = require('../model/product.json');
const favorites = require('../model/shoppingCart.json')
const users = require('../model/users.json')
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const products = require('../model/users.json');
const { validationResult } = require('express-validator');
const session = require('express-session')

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

    register: (req, res) => {
        let id = req.body.id
        let newUser = users.find(element => element.id == id);
        console.log(newUser)
        newUser.push(newUser)
        let newRegister = JSON.stringify(newU, null, 6)
        fs.writeFileSync(path.join(__dirname, '../model/users.json'), newRegister)
        res.redirect('/')
    },

    productForm: (req, res) => {
        res.render('productForm')
    },

    addProduct: (req, res) => {
        res.render('addProduct')
    },

    editProduct: (req, res) => {
        res.render('editProduct')
    },

    removeProduct: (req, res) => {
        let id = req.params.id
        let elementToDelete = productos.find(element => element.id == id);
        res.render('removeProduct',{product:elementToDelete})
    },

    deleteProduct: (req, res) => {
        let id = req.params.id
        let elementToDelete = productos.find(element => element.id == id)
        let productoTodelete = productos.splice(elementToDelete.id, 1)
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