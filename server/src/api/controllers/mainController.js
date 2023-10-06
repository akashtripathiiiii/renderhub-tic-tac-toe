const { Server } = require("socket.io");

class MainController {
  onConnection(socket, io) {
    console.log("New Socket connected: ", socket.id);

    socket.on("custom_event", (data) => {
      console.log("Data: ", data);
    });
  }
}

module.exports = MainController;
