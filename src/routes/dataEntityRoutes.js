const express = require('express');
const router = express.Router();
const dataEntityController = require('../controllers/dataEntityController');
const authenticateRole = require('../utils/authMiddleware');

router.use(authenticateRole('user'));

// CRUD routes for data entities
router.post('/', dataEntityController.createDataEntity);
router.get('/', dataEntityController.getAllDataEntities);
router.get('/:id', dataEntityController.getDataEntityById);
router.put('/:id', dataEntityController.updateDataEntity);
router.delete('/:id', dataEntityController.deleteDataEntity);

module.exports = router;
