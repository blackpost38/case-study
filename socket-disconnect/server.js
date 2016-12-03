var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(4000);

var count = 0;

io.on('connection', function (socket) {
  socket.on('disconnect', function () {
    console.log('disconnect', count++);
  });
});
