const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const productController = {
    dashboard: (req,res) => {
        res.render('dashboard');
    },
    agregarProducto: (req,res) => {
        res.render('agregarProducto');
    },
    eliminarProducto: (req,res) => {
        res.render('eliminarProducto');
    },
    editarProducto: (req,res) => {
        res.render('editarProducto');
    },
}

module.exports = productController;