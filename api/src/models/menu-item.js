module.exports = function(sequelize, DataTypes) {
    const MenuItem = sequelize.define('MenuItem', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        menuId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        localeSeoId: {
            type: DataTypes.INTEGER
        },
        localeSlugSeoId: {
            type: DataTypes.INTEGER
        },
        parentId: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        customUrl: {
            type: DataTypes.STRING
        },
        private: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'menu_items',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    MenuItem.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return MenuItem;
};
