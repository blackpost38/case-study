var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socketioJwt = require("socketio-jwt");

server.listen(4000);

var count = 0;

// set authorization for socket.io
io.sockets
  .on('connection', socketioJwt.authorize({
    secret: 'testsecret'
  }))
  .on('authenticated', function(socket) {
    //this socket is authenticated, we are good to handle more events from it.
    /**
     *   let tokenPayload = {
     *     _id: user._id,
     *     email: user.email,
     *     createdDate: user.createdDate
     *   }
     */
    socket.emit('test', socket.decoded_token);
    // socket.emit('authenticated', socket.decoded_token);
    socket.on('disconnect', function () {
      console.log('disconnect', count++);
    });
  });
  

// io.use(socketioJwt.authorize({
//   secret: Buffer('testsecret', 'base64'),
//   handshake: true
// }));

// io.on('connection', function (socket) {
//   console.log('hello! ', socket);
// });
