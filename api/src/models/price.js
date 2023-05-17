module.exports = function(sequelize, DataTypes) {
    const Price = sequelize.define('Price', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        taxId: {
            type: DataTypes.INTEGER
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
        indexes: []
    });

    Price.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return Price;
};