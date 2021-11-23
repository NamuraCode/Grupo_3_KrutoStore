const path = require('path');
const users = require('../model/product.json');

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
        let indice = req.params.id
        let itemIndice = users.filter((item)=>{
            return item.id == indice
        })
        console.log(itemIndice)
        if (itemIndice!=undefined){
            res.render('productDetail',{"ingresan":users, "item":itemIndice,})
        }else{
        
        }    
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