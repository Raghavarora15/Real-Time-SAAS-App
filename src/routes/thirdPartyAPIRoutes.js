const express = require('express');
const router = express.Router();
const thirdPartyAPIController = require('../controllers/thirdPartyAPIController');
const authenticateRole = require('../utils/authMiddleware');

router.use(authenticateRole('user'));

// Routes for integrating third-party API
router.get('/data', thirdPartyAPIController.getDataFromAPI);

module.exports = router;
