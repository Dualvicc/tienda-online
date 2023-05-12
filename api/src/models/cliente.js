module.exports = function(sequelize, DataTypes) {
    const Cliente = sequelize.define('Cliente', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Nombre".'
                }
            }
        },
        telephone: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Teléfono".'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Email".'
                },
                isEmail: {
                    msg: 'Por favor, rellena el campo "Email" con un email válido.'
                }
            }
        },
        poblation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Población".'
                }
            }
        },
        postalCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Código Postal".'
                }
            }
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Dirección".'
                }
            }
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
        tableName: 'clientes',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    Cliente.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return Cliente;
};