module.exports = function(sequelize, DataTypes) {
    const SocialNetworkEmployee = sequelize.define('SocialNetworkEmployee', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        socialNetworkId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "socialNetworkId".'
                }
            }
        },
        employeeId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "employeeId".'
                }
            }
        },
        user: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "user".'
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
        tableName: 'social_networks_employees',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    SocialNetworkEmployee.associate = function(models) {
        SocialNetworkEmployee.belongsTo(models.SocialNetwork, { foreignKey: 'socialNetworkId' });
        SocialNetworkEmployee.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    };

    return SocialNetworkEmployee;
};