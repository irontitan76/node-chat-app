const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: 'someone@test.com',
      text: 'Hey, this is really cool.',
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', (socket) => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Started on port ${PORT}`);
});

module.exports = {app};
