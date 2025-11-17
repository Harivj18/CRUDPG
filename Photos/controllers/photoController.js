
const Photo = require('../models/photo');
const { v4: uuidv4 } = require('uuid');

exports.createPhoto = async (req, res) => {
  try {
    const { name, description, mime_type, media_metadata } = req.body;
    const newPhoto = await Photo.create({
      id: uuidv4(),
      name,
      description,
      mime_type,
      media_metadata
    });
    return res.status(200).json(newPhoto);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.findAll();
    return res.status(200).json(photos);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.getPhotoById = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    if (!photo) return res.status(400).json({ error: 'Photo not found' });
    return res.status(200).json(photo);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


exports.updatePhoto = async (req, res) => {
  try {
    const { name, description, mime_type, media_metadata } = req.body;
    const photo = await Photo.findByPk(req.params.id);
    if (!photo) return res.status(400).json({ error: 'Photo not found' });

    await photo.update({
      name: name || photo.name,
      description: description || photo.description,
      mime_type: mime_type || photo.mime_type,
      media_metadata: media_metadata || photo.media_metadata,
      updated_at: new Date()
    });

    return res.status(200).json(photo);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};


exports.deletePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    if (!photo) return res.status(400).json({ error: 'Photo not found' });
    await photo.destroy();
    return res.status(200).json({ message: 'Photo deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
