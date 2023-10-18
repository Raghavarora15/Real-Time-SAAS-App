const express = require('express');
const router = express.Router();
const userController = require('./src/controllers/userController');
const authenticateRole = require('../utils/authMiddleware');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes (require authentication)
router.use(authenticateRole('admin'));
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
