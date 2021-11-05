const path = require('path');

controller = {
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../view/index.html'))
    },
    productCart:(req,res)=>{
        res.sendFile(path.join(__dirname,'./view/productCart.html'))
    },
    products:(req,res)=>{
        res.sendFile(path.join(__dirname,'./view/products.html'))
    }
}

module.exports = controller;