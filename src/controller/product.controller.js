const fs = require("fs")
const path = require("path")
const { productosLogica, generosLogica, imagenesLogica, FavoritosLogica, usuariosLogica } = require('../models')

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
    productsList: async (req, res) => {
        await FavoritosLogica.getAll()
       await productosLogica.getAll({
                include: ["imagenes"]
            })
            .then(ingresan => {
                res.render('products', {
                    ingresan
                })
            })
    },
    productCart: async (req, res) => {
        res.render('productCart')
    },
    agregarCart: async (req, res) => {
        let id = req.body.id
        let favortios = await productosLogica.getDetail(id)
        let user = req.session.user
        user.favoritos.push(favortios)
        res.redirect('/productCart')
    },
    crearProducto: async (req, res) => {
        try{
            let file = req.file ? '/images/productos/' + req.file.filename : '/images/productos/kruto-rojo.png' 
            imagenesLogica.create(file)
            let productos = await productosLogica.getAll()
            let pro = productos.length
            let session = req.session.user
            console.log(productos[pro-1].id + 1)
            productosLogica.newProductos({
                nombre: req.body.product,
                descripcion: req.body.description,
                categorias_id: req.body.select,
                precio: req.body.price,
                usuarios_id: session.perfiles_id,
                imagenes_id: productos[pro-1].id + 1
            })

            res.redirect('./dashboard')
        }catch(e){
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