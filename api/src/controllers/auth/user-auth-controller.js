const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv').config()
const process = require('process')
const db = require('../../models')
const User = db.User
const TrackingService = require('../../services/tracking-service')


exports.signin = async (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(async user => {
      if (!user) {
        res.status(404)
        await new TrackingService().apiTracking(req, res);
        return res.send({ message: 'Usuario o contraseña incorrecta' })

      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        res.status(404)
        await new TrackingService().apiTracking(req, res);
        return res.send({
          accessToken: null,
          message: 'Usuario o contraseña incorrecta'
        })
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400
      })

      res.status(200)
      await new TrackingService().apiTracking(req, res);

      return res.send({
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken: token
      })
    })
    .catch(async err => {
      console.log(err)
      res.status(500)
      await new TrackingService().apiTracking(req, res);

      res.send({ message: err.message })
    })

}
