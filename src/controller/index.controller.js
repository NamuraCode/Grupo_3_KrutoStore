const path = require('path');

controller = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/index.html'))
    },
    productCart:(req,res)=>{
        res.sendFile(path.join(__dirname,'../view/productCart.html'))
    },
    products:(req,res)=>{
        res.sendFile(path.join(__dirname,'../view/products.html'))
    },
    login:(req,res)=>{
        res.sendFile(path.join(__dirname,'../view/login.html'))
    },
    productDetail:(req,res)=>{
        res.sendFile(path.join(__dirname,'../view/productDetail.html'))
    },
    register:(req,res)=>{
        res.sendFile(path.join(__dirname,'../view/register.html'))
    }
}

module.exports = controller;