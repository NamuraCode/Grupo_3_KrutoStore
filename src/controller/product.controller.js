const fs = require("fs")
const path = require("path")
const { productosLogica, generosLogica, imagenesLogica, favoritosLogica } = require('../models')

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
        res.render('editarProducto', {categorias: categorias, articuloAEditar:producto, image:producto.imagenes.image});
    },
    productsList:  async (req, res) => {
        let ingresanP = await productosLogica.getAll({
            include: ["imagenes"]
        })
        res.render('products', {ingresan:ingresanP})
    },
    productCart: async (req, res) => {
        let usuarioId = req.session.user.id
        let productosFavoritos = await favoritosLogica.getOne(usuarioId)
        res.render('productCart', {
            favorite:productosFavoritos
        })
    },
    agregarCart: async (req, res) => {
        let usuarioId = req.session.user.id
        let producto = req.params.id
        favoritosLogica.createOne(usuarioId, producto)
        res.redirect('/productCart')
    },
    crearProducto: async (req, res) => {
        try{
            let file = req.file ? '/images/productos/' + req.file.filename : '/images/productos/kruto-rojo.png' 
            imagenesLogica.create(file)
            let productos = await imagenesLogica.getAll()
            let pro = productos.length
            console.log(pro)
            let session = req.session.user
            productosLogica.newProductos({
                nombre: req.body.product,
                descripcion: req.body.description,
                categorias_id: req.body.select,
                precio: req.body.price,
                usuarios_id: session.perfiles_id,
                imagenes_id: pro+1
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
            let producto = await productosLogica.getDetail(req.params.id)
            let file = req.file ? '/images/productos/' + req.file.filename : producto.imagenes.image;
            let imagenId = producto.imagenes.id
            imagenesLogica.update(file, imagenId)
            let session = req.session.user
            productosLogica.editProductos({
                id:req.params.id,
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                categorias_id: req.body.select,
                precio: req.body.precio,
                Usuarios_id: session.perfiles_id,
                imagenes_id: producto.imagenes.id
            },{
                where:{
                    id:producto.id
                }
            })
            
            res.render('dashboard')
        } catch(e){
            res.status(404).render("error")
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
            res.status(404).render('error')
        }
        
    },
    eliminarFavorito: async (req, res)=> {
        try{
            let idParams = req.params.id
            favoritosLogica.eliminar({
                where:{
                    id:idParams
                }
            })
            res.redirect('/productCart')
        }catch(e){
            res.status(404).render('error')
        }
    }
}

module.exports = productController;