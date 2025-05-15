// src/application/use_cases/createRoom.js
const Room = require('../../domain/models/room');
const RoomRepository = require('../../infrastructure/repositories/RoomRepository');

async function createRoom(roomData) {
  const room = new Room(roomData.id, roomData.name, roomData.price, roomData.location);
  await RoomRepository.save(room);
  return room;
}

module.exports = createRoom;
