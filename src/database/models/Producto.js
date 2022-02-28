module.exports = (sequelize, dataTypes) => {
    const alias = "Productos"
    const colums = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        categorias_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Usuarios_id: {
            type:dataTypes.INTEGER,
            allowNull: false
        },
        imagenes_id: {
            type:dataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {
        tableName: "productos",
        timestamps: false
    }
    const Producto = sequelize.define(alias, colums, config)
    Producto.associate = (modelos) => {
        Producto.belongsTo(modelos.Categorias, { 
            as: "categorias", 
            foreignKey: "categorias_id"
        });
        Producto.belongsTo(modelos.Usuarios, {
            as: "usuarios",
            foreignKey: "usuarios_id"
        })
        Producto.belongsTo(modelos.Imagenes, { 
            as: "imagenes", 
            foreignKey: "imagenes_id"
        });
        // Producto.belongsToMany(modelos.Usuarios, { 
        //     as: 'usuario_id_usuarios', 
        //     through: "productos_favoritos", 
        //     foreignKey: "producto_id", 
        //     otherKey: "usuario_id" 
        // });
        // Producto.belongsTo(modelos.Productos_Favoritos, { 
        //     as: "favoritos", 
        //     foreignKey: "producto_id"
        // });
    }
    return Producto
}