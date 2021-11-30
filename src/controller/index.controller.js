const path = require('path');
const users = require('../model/product.json');
const arrayProducts = require('../model/addProducts.json')
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
        res.render('productForm',{array:arrayProducts})
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
        let create={
            id:(arrayProducts.length + 1),
            name:req.body.product,
            image:req.body.image,
            description:req.body.description,
            category:req.body.category,
            price:req.body.price,
        };
        users.push(create)
        const producto = JSON.stringify(users, null, 4)
        fs.writeFileSync(path.join(__dirname,'../model/addProducts.json'),producto)
        console.log(create)
        res.redirect('/productForm')
    }
}

module.exports = controller;