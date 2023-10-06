const { Server } = require("socket.io");

class GameController {
  constructor(io) {
    this.io = io;
  }

  getSocketGameRoom(socket) {
    const socketRooms = Array.from(socket.rooms.values()).filter(
      (r) => r !== socket.id
    );
    const gameRoom = socketRooms && socketRooms[0];

    return gameRoom;
  }

  updateGame(socket, message) {
    const gameRoom = this.getSocketGameRoom(socket);
    socket.to(gameRoom).emit("on_game_update", message);
  }

  gameWin(socket, message) {
    const gameRoom = this.getSocketGameRoom(socket);
    socket.to(gameRoom).emit("on_game_win", message);
  }
}

module.exports = GameController;  