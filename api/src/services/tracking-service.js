const db = require('../models');
const UserTracking = db.UserTracking;


module.exports = class TrackingService {
  
    apiTracking = async (req,res) => {
        const body = {
            userId: req.userId,
            ip: req.ip,
            resource: req.originalUrl,
            method: req.method,
            response: res.statusCode
        }
        try {
            await UserTracking.create(body);

          } catch (error) {
            console.error('Error al guardar los datos de seguimiento:', error);

          }

    }
  
}