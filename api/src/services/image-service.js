const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const db = require('../models');
const ImageConfiguration = db.ImageConfiguration;
const Image = db.Image;

module.exports = class ImageService {
  uploadImage = async (images) => {

    const thumbnails = [];

    for (const file of images.file) {

      const filename = file.filename;
      const currentDate = new Date().toLocaleString().replace(/[/,:\s]/g, '-').replace(/-{2,}/g, '-');
      const tmpFilePath = path.join(__dirname, `../storage/tmp/${filename}`);
      const parsedFilename = `${currentDate}-${filename.replace(/[\s_]/g, '-')}`;
      const originalFilePath = path.join(
        __dirname,
        `../storage/images/gallery/original/${path.parse(parsedFilename).name}`
      )
      const thumbnailFilePath = path.join(
        __dirname,
        `../storage/images/gallery/thumbnail/${path.parse(parsedFilename).name}`
      )
      try {
        await fs.access(tmpFilePath);
        await sharp(tmpFilePath).webp({ lossless: true }).toFile(originalFilePath + '.webp');
        await sharp(tmpFilePath).resize(135, 135, { fit: 'contain' }).webp({ lossless: true }).toFile(thumbnailFilePath + '.webp');

        await fs.unlink(tmpFilePath);
        thumbnails.push(path.parse(parsedFilename).name); 
      } catch (error) {
        console.error('Ocurrió un error al procesar el archivo:', error);
      }
    }

    return thumbnails; 
  };



  resizeImages = async (entity, entityId, images) => {
    const imageConfiguration = await ImageConfiguration.findOne({ where: { entityId: entityId } });
    console.log(imageConfiguration);
    images.forEach(image => {
      image.imageName
    })
  }

  deleteImages = async filename => {

  }

  getThumbnails = async (limit, offset) => {

  }
}