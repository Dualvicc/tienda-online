module.exports = function(sequelize, DataTypes) {
    const SaleDetail = sequelize.define('SaleDetail', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        saleId: {
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        productName: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "productName".'
                }
            }
        },
        basePrice: {
            allowNull: false,
            type: DataTypes.DECIMAL(6, 2),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "basePrice".'
                }
            }
        },
        taxPrice: {
            allowNull: false,
            type: DataTypes.DECIMAL(6, 2),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "taxPrice".'
                }
            }
        },
        unitOfMeasurement: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "unitOfMeasurement".'
                }
            }
        },
        quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "quantity".'
                }
            }
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
        tableName: 'sale_details',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    SaleDetail.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return SaleDetail;
};