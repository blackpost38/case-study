var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var celery = require('node-celery');

server.listen(4000);

var someInfo = {
	client: {},
	userId: 'tset',
	isLogin: false,
	task: {
		object: {},
		isDone: false,
		result: {}
	}
};

var	client = celery.createClient({
	CELERY_BROKER_URL: 'amqp://guest:guest@localhost:5672//',
	CELERY_RESULT_BACKEND: 'amqp'
});

client.on('error', function(err){
	console.log(err);
})

client.on('connect', function(){
	console.log('connect to celery!');
})

io.on('connection', function (socket) {
	// login check
	someInfo.client = socket;
	someInfo.isLogin = true;

	// check tasks of user
	if (someInfo.task.isDone) {
		console.log('you don\'t have any task that is running');
		socket.emit('result', someInfo.task.result);
	} else {
		console.log('you have some task that is running');
	}

	// execute command
	socket.on('command', function(){
		console.log('command is called..');

		var result = client.call('tasks.add', [1, 2]);
		// update task info
		someInfo.task.object = result;
		someInfo.task.isDone = false;

    result.on('ready', function(data) {
			console.log(data);
			someInfo.task.isDone = true;
			someInfo.task.result = data;

			someInfo.client.emit('result', someInfo.task.result);
    });

	})
	
	socket.on('test', function (data) {
		console.log('test...', data);
	})

  socket.on('disconnect', function () {
    console.log('disconnect');
		someInfo.isLogin = false
		console.log('isLogin is', someInfo.isLogin);
  });
});
