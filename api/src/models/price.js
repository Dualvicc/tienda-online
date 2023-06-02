module.exports = function(sequelize, DataTypes) {
    const Price = sequelize.define('Price', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Product',
                key: 'id'
            }
        },
        taxId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Tax',
                key: 'id'
            }
        },
        basePrice: {
            type: DataTypes.DECIMAL
        },
        current: {
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
        tableName: 'prices',
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
                name: "products_productId_foreignKey",
                using: "BTREE",
                fields: [
                    { name: "productId" }
                ]
            },
            {
                name: "taxes_taxId_foreignKey",
                using: "BTREE",
                fields: [
                    { name: "taxId" }
                ]
            }
        ]
    });

    Price.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
        Price.belongsTo(models.Product, { foreignKey: 'productId' });
        Price.belongsTo(models.Tax, { foreignKey: 'taxId' });
    };

    return Price;
};
