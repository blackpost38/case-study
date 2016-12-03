const originalPath = '/data/source/571eca2f8316c7f6d5b892f3/original/22.csv';
const validatePath = '/data/source/571eca2f8316c7f6d5b892f3/validated/22.csv';

var celery = require('node-celery'),
	client = celery.createClient({
		CELERY_BROKER_OPTIONS: {
			host: '192.168.99.100',
			port: '5672',
			login: 'guest',
			password: 'guest',
			authMechanism: 'AMQPLAIN',
			vhost: '/',
		},
		CELERY_RESULT_BACKEND: 'amqp'
	});

client.on('error', function(err){
	console.log(err);
})

client.on('connect', function(){
	console.log('connect!');
	const task = client.call('mlcore.tasks.validateCSV', [originalPath, validatePath])
	task.on('ready', function(data) {
		console.log('ready', data);
	});
	task.on('progress', function(data) {
		console.log('progress', data);
	});
	task.on('success', function(data){
		console.log('success', data);
	});
})
