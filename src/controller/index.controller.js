const path = require('path');
const users = require('../model/product.json');

controller = {
    index: (req, res) => {
        res.render('index')
    },

    productCart: (req, res) => {
        res.render('productCart')
    },

    products: (req, res) => {
        res.render('products', {
            "ingresan": users
        })
    },

    login: (req, res) => {
        res.render('login')
    },

    productDetail: (req, res) => {
        let id = req.params.id
        console.log(id)
        res.render('productDetail', {
            "ingresan": users,
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
        let creating={
            name:req.body.product,
            price:req.body.price
        }
        console.log(creating)
        res.redirect('/productForm')
    }
}

module.exports = controller;