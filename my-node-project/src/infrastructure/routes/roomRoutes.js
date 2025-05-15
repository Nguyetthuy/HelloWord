// src/infrastructure/routes/roomRoutes.js
const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.post('/rooms', roomController.create);

module.exports = router;
