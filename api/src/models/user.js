const useBcrypt = require('sequelize-bcrypt')

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Nombre".'
        },
        notEmpty: {
          msg: 'Por favor, rellena el campo "Nombre".'
        },
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: {
        args: true,
        msg: 'Ya existe un usuario con ese correo electrónico.'
      },
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "Email".'
        },
        notEmpty: {
          msg: 'Por favor, rellena el campo "Email".'
        },
        isEmail: {
          msg: 'Por favor, rellena el campo "Email" con un email válido.'
        }
      }
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Por favor, rellena el campo "password".'
        },
        notEmpty: {
          msg: 'Por favor, rellena el campo "password".'
        },
      }
    }
  }, {
    sequelize,
    tableName: 'users',
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
        name: 'user_email_index',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'email' }
        ]
      }
    ]
  })

  useBcrypt(User)

  User.associate = function (models) {
    User.hasMany(models.Image, { foreignKey: 'entityId', onDelete: 'CASCADE' , scope:{ entity: 'user'} , as: 'images' })
    User.hasMany(models.UserTracking, { foreignKey: 'userId', as: 'userTrackings'})
  }

  return User
}
