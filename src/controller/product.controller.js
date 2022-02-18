const favorites = require('../data/shoppingCart.json')
const productos = require("../data/shoppingCart.json")
const fs = require("fs")
const path = require("path")
const { productosLogica, generosLogica, imagenesModels } = require('../models')

const productController = {
    dashboard:  (req, res) => {
       try{
           res.render('dashboard');
       }catch(error){
           res.render("error")
       }
    },
    agregarProducto: async (req, res) => {
        let categorias = await generosLogica.getAll()
        res.render('agregarProducto', { categorias: categorias});
    },
    eliminarProducto: async (req, res) => {
        try{
            let idParams = req.params.id
            let producto = await  productosLogica.getDetail(idParams)
            res.render('eliminarProducto',{
                producto
            });
        }catch(e){
            res.status(404).render('error')
        }
    },
    editarProducto: async (req, res) => {
        let categorias = await generosLogica.getAll()
        let producto = await productosLogica.getDetail(req.params.id)
        res.render('editarProducto', {categorias: categorias, articuloAEditar:producto});
    },
    productsList: (req, res) => {
        productosLogica.getAll({
                include: ["imagenes"]
            })
            .then(ingresan => {
                res.render('products', {
                    ingresan
                })
            })
    },
    productCart: (req, res) => {
        res.render('productCart', {
            favorite: favorites
        })
    },
    agregarCart: (req, res) => {
        let id = req.body.id
        let favorite = productos.find(element => element.id == id);
        favorites.push(favorite)
        let favor = JSON.stringify(favorites, null, 6)
        fs.writeFileSync(path.join(__dirname, '../data/shoppingCart.json'), favor)
        res.redirect('/productCart')
    },
    create: async (req, res) => {
        try{
            let file = req.file ? '/images/productos/' + req.file.filename : '/images/productos/kruto-rojo.png' 
            imagenesModels.create(file)
            let productos = await productosLogica.getAll()
            let pro = productos.length
            let session = req.session.user
            productosLogica.newProductos({
                nombre: req.body.product,
                descripcion: req.body.description,
                categorias_id: req.body.select,
                precio: req.body.price,
                Usuarios_id: session.perfiles_id,
                imagenes_id: productos[pro-1].id + 1
            })
            
            res.redirect('./products')
        } catch(e){
            res.status(404).render('error')
        }
    },
    listProductsDelete: (req, res) => {
        try{
            productosLogica.getAll({
                include: ["imagenes"]
            })
            .then(ingresan => {
                res.render('listaProductosEliminar', {
                    ingresan
                })
            })
        }catch(e){
            res.status(404).render('error')
        }
    },
    deleteProduct: (req, res) => {
        try{
            let idParams = req.params.id
            productosLogica.deleteProductos(idParams)
            res.render('dashboard')
        }catch(e){
            res.status(404).render('error')
        }
    },
    listProductsEdit: (req, res) => {
        try{
            productosLogica.getAll({
                include: ["imagenes"]
            })
            .then(ingresan => {
                res.render('listaProductosEditar', {
                    ingresan
                })
            })
        }catch(e){
            res.status(404).render('error')
        }
    },
    editProduct: async (req, res) => {
        try{
            // let file = req.file ? '/images/productos/' + req.file.filename : req.body.image
            // imagenesModels.create(file)
            let productos = await productosLogica.getAll()
            let pro = productos.length
            let session = req.session.user
            console.log(req.params.id)
            console.log("la longitud es de: "+pro)
            productosLogica.editProductos({
                id:req.params.id,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                categorias_id: req.body.select,
                precio: req.body.precio,
                Usuarios_id: session.perfiles_id,
                imagenes_id: productos[req.params.id-1].imagenes_id
            },{
                where:{
                    id:req.params.id
                }
            })
            
            res.render('dashboard')
        } catch(e){
            res.status(404).render('error')
        }
    },
    productDetail: async (req, res) => {
        try{
            
            let productos = await productosLogica.getDetail(req.params.id)
            let categoria = await generosLogica.getAll({
                where:{
                    id: productos.categorias_id
                }
            })
            res.render('productDetail', {
                ingresan: productos, categoria: categoria
            })
        }catch(e){
            next(e)
        }
        
    },
}

module.exports = productController;