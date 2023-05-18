module.exports = function(sequelize, DataTypes) {
    const LocaleSeoRedirect = sequelize.define('LocaleSeoRedirect', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        localeSeoId: {
            type: DataTypes.INTEGER
        },
        language: {
            type: DataTypes.STRING
        },
        group: {
            type: DataTypes.STRING
        },
        key: {
            type: DataTypes.STRING
        },
        subdomain: {
            type: DataTypes.STRING
        },
        oldUrl: {
            type: DataTypes.STRING
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
        tableName: 'locale_seo_redirects',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    return LocaleSeoRedirect;
};