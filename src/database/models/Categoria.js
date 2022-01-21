module.exports = (sequelize, DataTypes) => {
    let alias = 'categoria'
    let colums = {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        categoria: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'Categorias',
        timestamps: false,
    }

    let Categorias = sequelize.define(alias, colums, config)
    

    Categorias.associate= (models)=>{
        Categorias.hasMany(models.Producto,{ 
            as: "productos", 
            foreignKey: "Categorias_id"})

        Categorias.belongsToMany(models.User,{ 
            as: 'Users_id_Users_productos', 
            through: "Producto", 
            foreignKey: "Categorias_id", 
            otherKey: "Users_id" })
    }

    return Categorias
}