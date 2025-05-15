// src/infrastructure/controllers/roomController.js
const createRoom = require('../../application/use_cases/createRoom');

async function create(req, res) {
  try {
    const roomData = req.body;
    const room = await createRoom(roomData);
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { create };
