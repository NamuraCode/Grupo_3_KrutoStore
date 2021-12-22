const path = require('path');
const products = require('../data/product.json');


const product = {
    create: (req, res) => {
        let producto = {
        id:users.length +1,
        nombre: req.body.product,
        precio: req.body.price,
        categoria: req.body.category,
        descripcion: req.body.description,
        imagen: req.body.image,
        }
       //res.send (producto);
    console.log(producto);
    },
    edit:(req, res) => {
        res.render ('editProduct');
    },
}
module.exports = product;