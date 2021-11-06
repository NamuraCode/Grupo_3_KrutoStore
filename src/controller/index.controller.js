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
    }
}

module.exports = controller;