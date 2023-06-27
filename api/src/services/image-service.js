const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const db = require('../models');
const ImageConfiguration = db.ImageConfiguration;
const Image = db.Image;

module.exports = class ImageService {
  uploadImage = async (images) => {
    const thumbnails = [];

    await Promise.all(
      images.file.map(async (file) => {
        let filename = file.filename;
        const tmpFilePath = path.join(__dirname, `../storage/tmp/${filename}`);
        const originalFilename = filename.replace(/[\s_]/g, '-');
        const originalFilePath = path.join(
          __dirname,
          `../storage/images/gallery/original/${path.parse(originalFilename).name}`
        );
        const thumbnailFilePath = path.join(
          __dirname,
          `../storage/images/gallery/thumbnail/${path.parse(originalFilename).name}`
        );

        try {
          await fs.access(`${originalFilePath}.webp`);
          const currentDate = new Date().toLocaleString().replace(/[/,:\s]/g, '-').replace(/-{2,}/g, '-');
          const fileName = path.basename(originalFilePath);
          const updatedOriginalFilePath = path.join(path.dirname(originalFilePath), `${currentDate}-${fileName}`);
          const updatedThumbnailFilePath = path.join(path.dirname(thumbnailFilePath), `${currentDate}-${fileName}`);
          await fs.rename(`${originalFilePath}.webp`, `${updatedOriginalFilePath}.webp`);
          await fs.rename(`${thumbnailFilePath}.webp`, `${updatedThumbnailFilePath}.webp`);

          thumbnails.push(fileName); // Agregar la ruta de la imagen procesada al array
        } catch (error) {}

        try {
          await fs.access(tmpFilePath);
          await sharp(tmpFilePath).webp({ lossless: true }).toFile(originalFilePath + '.webp');
          await sharp(tmpFilePath).resize(135, 135, { fit: 'contain' }).webp({ lossless: true }).toFile(thumbnailFilePath + '.webp');

          await fs.unlink(tmpFilePath);
        } catch (error) {
          console.error('Ocurrió un error al procesar el archivo:', error);
        }
      })
    );

    return thumbnails; // Devolver el array de rutas de las imágenes en la carpeta "thumbnail"
  };
};
  resizeImages = async (entity, entityId, images) => {

  }

  deleteImages = async filename => {

  }

  getThumbnails = async (limit, offset) => {

  }