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

    let categorias = sequelize.define(alias, colums, config)
    return categorias

}