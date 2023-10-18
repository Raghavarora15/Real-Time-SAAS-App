const socketIo = require('socket.io');

function initializeWebSocket(server) {
  const io = socketIo(server);
  
  io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Handle real-time events here
    socket.on('chat message', (message) => {
      // Broadcast the message to all connected clients
      io.emit('chat message', message);
    });
    
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
  
  return io;
}

module.exports = initializeWebSocket;
