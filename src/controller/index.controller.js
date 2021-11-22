const path = require('path');
const users = require('../data/product.json');
controller = {
    index: (req, res) => {
        res.render('index')
    },

    productCart:(req,res)=>{
        res.render('productCart')
    },

    products:(req,res)=>{
        res.render('products',{"ingresan":users})
    },

    login:(req,res)=>{
        res.render('login')
    },

    productDetail:(req,res)=>{
        let inf = req.parms
        let itemId = users.filter((item)=>{
            return item.id == inf
        })
        console.log(itemId)
        res.render('productDetail',{"ingresan":users,"item":itemId})
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