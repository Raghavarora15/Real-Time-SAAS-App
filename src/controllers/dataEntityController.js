const DataEntity = require('../models/dataEntity');

const createDataEntity = async (req, res) => {
  try {
    const newDataEntity = new DataEntity(req.body);
    await newDataEntity.save();
    res.status(201).json(newDataEntity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllDataEntities = async (req, res) => {
  try {
    const dataEntities = await DataEntity.find();
    res.status(200).json(dataEntities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDataEntityById = async (req, res) => {
  try {
    const dataEntity = await DataEntity.findById(req.params.id);
    if (!dataEntity) {
      return res.status(404).json({ message: 'Data entity not found' });
    }
    res.status(200).json(dataEntity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDataEntity = async (req, res) => {
  try {
    const updatedDataEntity = await DataEntity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDataEntity) {
      return res.status(404).json({ message: 'Data entity not found' });
    }
    res.status(200).json(updatedDataEntity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDataEntity = async (req, res) => {
  try {
    const deletedDataEntity = await DataEntity.findByIdAndDelete(req.params.id);
    if (!deletedDataEntity) {
      return res.status(404).json({ message: 'Data entity not found' });
    }
    res.status(200).json(deletedDataEntity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDataEntity,
  getAllDataEntities,
  getDataEntityById,
  updateDataEntity,
  deleteDataEntity,
};
