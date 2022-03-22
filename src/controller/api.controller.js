const { productosLogica, usuariosLogica } = require("../models");

const apiController = {
  listProducts: async (req, res) => {
    try {
      let listaproductos = await productosLogica.getAll();
      let totalitems = listaproductos.length;
      let arrayItems = [];

      listaproductos.filter((resultado) => {
        let categoria = {
          categoria: resultado.categorias,
        };
        let nombreDeUsuario = {
          UsuarioCreador: resultado.usuarios.username,
        };
        let imagen = {
          imagen: resultado.imagenes,
        };

        let producto = {
          id: resultado.id,
          name: resultado.nombre,
          description: resultado.descripcion,
          relations: [categoria, nombreDeUsuario, imagen],
          detailUrl: `https://kruto.herokuapp.com/api/products/${resultado.id}`,
        };

        arrayItems.push(producto);
      });

      res.json({
        link: "https://kruto.herokuapp.com/api/products",
        count: totalitems,
        data: arrayItems,
      });
    } catch (e) {
      res.json({
        error: `ha ocurrido un error inesperado ${e}`,
      });
    }
  },
  detailProduct: async (req, res) => {
    try {
      let idParams = req.params.id;
      let product = await productosLogica.getDetail(idParams);

      if (product != undefined) {
        let categoria = {
          categoria: product.categorias,
        };
        let nombreDeUsuario = {
          UsuarioCreador: product.usuarios.username,
        };
        let imagen = {
          imagen: product.imagenes,
        };

        res.json({
          id: product.id,
          name: product.nombre,
          description: product.descripcion,
          relations: [categoria, nombreDeUsuario, imagen],
          imagenlUrl: `https://kruto.herokuapp.com${product.imagenes.image}`,
        });
      } else {
        res.json({
          error: "parametro no encontrado",
        });
      }
    } catch (error) {
      res.json({
        error: `parametro no encontrado, error: ${error}`,
      });
    }
  },
  listUsers: async (req, res) => {
    try {
      let listaUsuarios = await usuariosLogica.getAll();
      let totalitems = listaUsuarios.length;
      let arrayItems = [];

      listaUsuarios.filter((resultado) => {
        let usuario = {
          id: resultado.id,
          name: resultado.username,
          email: resultado.email,
          detailUrl: `https://kruto.herokuapp.com/api/users/${resultado.id}`,
        };
        arrayItems.push(usuario);
      });
      res.json({
        link: "https://kruto.herokuapp.com/api/users",
        count: totalitems,
        data: arrayItems,
      });
    } catch (e) {
      res.json({
        erorr: `error inesperado ${e}`,
      });
    }
  },
  detailUser: async (req, res) => {
      try{
        let idParams = req.params.id;
        let user = await usuariosLogica.getId(idParams);

        res.json({
            "user":{
                "id":user.id,
                "username":user.username,
                "email":user.email,
                "urlImage":`https://kruto.herokuapp.com${user.image}`
            }
        });
      }catch(e){
          res.json({
              "error":`ha ocurrido un error inesperado ${e}`
          })
      }
  }
};

module.exports = apiController;
