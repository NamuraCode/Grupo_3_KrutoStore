const favorites = require('../data/shoppingCart.json')
const { productosLogica, generosLogica } = require('../models')

const productController = {
    dashboard: (req, res) => {
        res.render('dashboard');
    },
    agregarProducto: (req, res) => {
        res.render('agregarProducto');
    },
    eliminarProducto: (req, res) => {
        res.render('eliminarProducto');
    },
    editarProducto: (req, res) => {
        res.render('editarProducto');
    },
    productsList: (req, res) => {
        productosLogica.getAll({
                include: ["imagenes"]
            })
            .then(ingresan => {
                console.log(ingresan[1].imagenes.image)
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
        console.log(favorite)
        favorites.push(favorite)
        let favor = JSON.stringify(favorites, null, 6)
        fs.writeFileSync(path.join(__dirname, '../data/shoppingCart.json'), favor)
        res.redirect('/productCart')
    },
    create: (req, res) => {
        console.log('Desarrolla la logica para cerar productos plis')
    },
    deleteProduct: (req, res) => {
        console.log('Desarrolla la logica para eliminar productos plis')
    },
    editProduct: (req, res) => {
        console.log('Desarrolla la logica para editar productos plis')
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
            console.log(productos, categoria.categoria)
        }catch(e){
            next(e)
        }
        
    },
}

module.exports = productController;