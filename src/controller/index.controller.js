const path = require('path');
const productos = require('../model/product.json');
const favorites = require('../model/shoppingCart.json')
const fs = require('fs');

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
        res.render('register')
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
        res.render('removeProduct')
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
        favorites.push(favorite)
        let favor = JSON.stringify(favorite, null, 6)
        fs.writeFileSync(path.join(__dirname, '../model/shoppingCart.json'), favor)
        res.redirect('/productCart')
    }
}

module.exports = controller;