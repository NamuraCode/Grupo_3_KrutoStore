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
            references: {
                model: "Categorias",
                key: "id"
            }
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        usuarios_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Usuarios",
                key: "id"
            }
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
        })
        Producto.belongsTo(modelos.Usuarios, {
            as: "productos_usuarios",
            foreignKey: "usuarios_id"
        })
    }
    return Producto
}