
module.exports = function (sequelize, DataTypes) {
    const UserTracking = sequelize.define('UserTracking', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'users',
            key: 'id'
            },
            validate: {
                notNull: {
                msg: 'Por favor, rellena el campo "userId".'
                },
                notEmpty: {
                msg: 'Por favor, rellena el campo "userId".'
                },
            }
        },
        ip: {
            type: DataTypes.STRING,
        },
        resource: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                  msg: 'Por favor, rellena el campo "resource".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "resource".'
                },
            }
        },
        method: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                  msg: 'Por favor, rellena el campo "method".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "method".'
                },
            }
        },
        response: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notNull: {
                  msg: 'Por favor, rellena el campo "response".'
                },
                notEmpty: {
                  msg: 'Por favor, rellena el campo "response".'
                },
            }
        },
    }, {
    sequelize,
    tableName: 'user_trackings',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'user_tracking_userId_index',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'userId' }
        ]
      }
    ]
  })


  UserTracking.associate = function (models) {
    UserTracking.belongsTo(models.User, { foreignKey: 'userId', as: 'users' })
  }

  return UserTracking
}
