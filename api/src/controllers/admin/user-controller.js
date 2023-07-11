const db = require("../../models");
const User = db.User;
const Image = db.Image;
const Op = db.Sequelize.Op;
const ImageService = require('../../services/image-service')
const TrackingService = require('../../services/tracking-service')

exports.create = async (req, res) => {

    User.create(req.body).then(async data => {
        if(req.body.images){
            await new ImageService().resizeImages('user', data.id, req.body.images);
        }
        

        res.status(200)
        await new TrackingService().apiTracking(req, res);

        res.send(data);

    }).catch(async err => {
        res.status(500)
        await new TrackingService().apiTracking(req, res);

        res.send({
            message: err.errors || "Algún error ha surgido al insertar el dato."
        });
    });
};

exports.findAll = async(req, res) => {
    
    let page = req.query.page || 1;
    let limit = parseInt(req.query.size) || 4;
    let offset = (page - 1) * limit;
    let whereStatement = {};

    for (const key in req.query) {
        if (req.query[key] != '' && key != 'page' && key != 'size') {
          whereStatement[key] = { [Op.substring]: req.query[key] }
        }
    }

    let condition = Object.keys(whereStatement).length > 0 ? {[Op.and]: [whereStatement]} : {};

    User.findAndCountAll({
        where: condition, 
        attributes: ['id', 'name', 'email'],
        limit: limit,
        offset: offset,
        order: [['createdAt', 'DESC']]
    })
    .then(async result => {

        result.meta = {
            total: result.count,
            pages: Math.ceil(result.count / limit),
            currentPage: page
        };

        res.status(200)
        await new TrackingService().apiTracking(req, res);

        res.send(result);

    }).catch(async err => {
        res.status(500)
        await new TrackingService().apiTracking(req, res);

        res.send({
            message: err.errors || "Algún error ha surgido al recuperar los datos."
        });
    });
};

exports.findOne = async (req, res) => {
    
    const id = req.params.id;

    User.findByPk(id,{
        attributes: { exclude: ['password'] },
        include: [
            {   
                model: db.Image,
                as: 'images',
                where:{ mediaquery: 'lg'},
                required: false
            }
            
        ],

    }).then(async data => {

        if (data) {
            res.status(200)
            await new TrackingService().apiTracking(req, res);

            res.send(data);
        } else {
            res.status(404)
            await new TrackingService().apiTracking(req, res);

            res.send({
                message: `No se puede encontrar el elemento con la id=${id}.`
            });
        }

    }).catch(async err => {
        res.status(500)
        await new TrackingService().apiTracking(req, res);

        res.send({
            message: "Algún error ha surgido al recuperar la id=" + id
        });
    });
};

exports.update = async(req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    }).then(async num => {
        if (num == 1) {
            res.status(200)
            await new TrackingService().apiTracking(req, res);

            res.send({
                message: "El elemento ha sido actualizado correctamente."
            });
        } else {
            res.status(404)
            await new TrackingService().apiTracking(req, res);

            res.send({
                message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
            });
        }
    }).catch(async err => {
        res.status(500)
        await new TrackingService().apiTracking(req, res);

        res.send({
            message: "Algún error ha surgido al actualiazar la id=" + id
        });
    });

};

exports.delete = async(req, res) => {
    const id = req.params.id;

    db.sequelize.transaction((t) => {
        return User.destroy({
            where: { id: id },
            transaction: t
        })
        .then(num => {
            if (num == 1) {
                return db.Image.destroy({
                    where: { entityId: id, entity: 'user' },
                    transaction: t
                });
            } else {
                throw new Error(`No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`);
            }
        });
    })
    .then(async () => {
        res.status(200)
        await new TrackingService().apiTracking(req, res);

        res.send({
            message: "El elemento ha sido borrado correctamente"
        });
    })
    .catch(async err => {
        if (err.message) {
            res.status(404)
            await new TrackingService().apiTracking(req, res);

            res.send({
                message: err.message
            });
        } else {
            res.status(500)
            await new TrackingService().apiTracking(req, res);

            res.send({
                message: "Algún error ha surgido al borrar la id=" + id
            });
        }
    });

};