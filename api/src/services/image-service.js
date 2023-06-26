const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {
  uploadImage = async images => {

    let filename = images.file[0].filename;
    const tmpFilePath = path.join(__dirname, `../storage/tmp/${filename}`);
    const originalFilename = filename.replace(/[\s_]/g, '-');
    const originalFilePath = path.join(__dirname, `../storage/images/gallery/original/${path.parse(originalFilename).name}`);
    const thumbnailFilePath = path.join(__dirname, `../storage/images/gallery/thumbnail/${path.parse(originalFilename).name}`);

    try {
        await fs.access(tmpFilePath);
        await sharp(tmpFilePath).webp({ lossless: true }).toFile(originalFilePath + '.webp');
        await sharp(tmpFilePath).resize(135, 135, { fit: 'contain' }).webp({ lossless: true }).toFile(thumbnailFilePath + '.webp');
        console.log('Archivo convertido y guardado correctamente.');
        await fs.unlink(tmpFilePath);
      } catch (error) {
        console.error('Ocurrió un error al procesar el archivo:', error);
      }
  }

  resizeImages = async (entity, entityId, images) => {

  }

  deleteImages = async filename => {

  }

  getThumbnails = async (limit, offset) => {

  }
}