const path = require('path');

controller = {
    index: (req, res) => {
        res.render('index')
    },

    productCart:(req,res)=>{
        res.render('productCart')
    },

    products:(req,res)=>{
        res.render('products')
    },

    login:(req,res)=>{
        res.render('login')
    },

    productDetail:(req,res)=>{
        res.render('productDetail')
    },

    register:(req,res)=>{
        res.render('register')
    },

    productForm:(req,res)=>{
        res.render('productForm')
    },

    addProduct:(req,res) =>{
        res.render('addProduct')
    },

    editProduct:(req,res) =>{
        res.render('editProduct')
    },

    removeProduct:(req,res) =>{
        res.render('removeProduct')
    },
}

module.exports = controller;