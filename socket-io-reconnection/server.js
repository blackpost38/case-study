var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(4000);

var socketCollection = {};

io.of('/test')
	.on('connection', function (socket) {

		console.log('socket list', Object.keys(io.sockets.sockets));
		
		socket.on('some authenticate', function (userId) {
			// share existing socket
			if (socketCollection[userId]) {
				console.log('socket', socketCollection[userId].id);
				socket = socketCollection[userId];
			} else {
				socketCollection[userId] = socket;
			}
			console.log('socket id', socket.id);
		});
		
	});
