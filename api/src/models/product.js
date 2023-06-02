module.exports = function(sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productCategoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ProductCategory',
                key: 'id'
            }
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "name".'
                }
            }
        },
        featured: {
            type: DataTypes.BOOLEAN
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'products',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" }
                ]
            },
            {
                name: "productCategories_productCategoryId_foreignKey",
                using: "BTREE",
                fields: [
                    { name: "productCategoryId" }
                ]
            },
        ]
    });

    Product.associate = function(models) {
        Product.belongsTo(models.ProductCategory, {
            foreignKey: 'productCategoryId',
            as: 'productCategory'
        });
    };

    return Product;
};
