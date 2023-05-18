module.exports = function(sequelize, DataTypes) {
    const LocaleSeoSlug = sequelize.define('LocaleSeoSlug', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        relParent: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        key: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        localeSeoId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        parentSlug: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        keywords: {
            type: DataTypes.STRING
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
        tableName: 'locale_seo_slugs',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    return LocaleSeoSlug;
};