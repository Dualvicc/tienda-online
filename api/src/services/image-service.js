const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const db = require('../models');
const ImageConfiguration = db.ImageConfiguration;
const Image = db.Image;

const currentDate = new Date().toLocaleString().replace(/[/,:\s]/g, '-').replace(/-{2,}/g, '-');

module.exports = class ImageService {
  
  uploadImage = async (images) => {

    const thumbnails = [];

    for (const file of images.file) {

      const filename = file.filename;
      
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
    const resizedFilePath = path.join(__dirname, '../storage/images/gallery/resized');
    
    for (const image of images) {
      const startTime = new Date().getTime();
      const originalFileName = `${path.parse(image.filename).name}.webp`;
      const imageConfigurations = await ImageConfiguration.findAll({
        where: { 
          entity: entity,
          name: image.name
        }
      });
  
      const originalFilePath = path.join(__dirname, `../storage/images/gallery/original/${originalFileName}`);
  
      for (const imageConfiguration of imageConfigurations) {
        const resizedFileName = `${path.parse(image.filename).name}-${imageConfiguration.dataValues.widthPx}x${imageConfiguration.dataValues.heightPx}.webp`;
    
        try {
          await fs.access(originalFilePath);
          await sharp(originalFilePath).resize(imageConfiguration.dataValues.widthPx, imageConfiguration.dataValues.heightPx, { fit: 'contain' }).toFile(`${resizedFilePath}/${resizedFileName}`);
          const endTime = new Date().getTime();
          const latencyMs = endTime - startTime;
    
          const body = {
            imageConfigurationId: imageConfiguration.dataValues.id,
            entityId: entityId,
            entity: entity,
            name: image.name,
            originalFilename:  originalFileName,
            resizedFilename: resizedFileName,
            title: image.title,
            alt: image.alt,
            languageAlias: image.languageAlias || 'es',
            mediaQuery: imageConfiguration.dataValues.mediaQuery,
            latencyMs: latencyMs
          };
    
          await Image.create(body);
        } catch (error) {
          console.error('Ocurrió un error al procesar el archivo:', error);
        }
      }
    }
  };
  
  deleteImage = async (filename, confirmation) => {
    
    if(!confirmation){

      db.Image.findAll({where: {originalFilename: filename}})
      .then(async (images) => {

        if(images.length > 0){

          return {
            message : 'Algun usuario está utilizando esa imagen. Seguro que desea eliminarla?',
            success: false,
        }

        }else{

          confirmation = true;
        }        
      });

    }
    
    if(confirmation){
      const thumbnailsFilePath = path.join(__dirname, '../storage/images/gallery/thumbnail');
      const thumbnails = await fs.readdir(thumbnailsFilePath);

      for (const thumbnail of thumbnails) {
        if (thumbnail === filename) {
          await fs.unlink(path.join(thumbnailsFilePath, thumbnail));
        }
      }

      db.Image.destroy({
        where: {
          originalFilename: filename
        }
      })
    
    return {success: true}; 

    }
    
  }

  getThumbnails = async (limit, offset) => {

    const thumbnailsFilePath = path.join(__dirname, '../storage/images/gallery/thumbnail');
    const thumbnails = await fs.readdir(thumbnailsFilePath);
    // const startIndex = offset * limit;
    // const endIndex = startIndex + limit;

    return thumbnails
    

  }
}