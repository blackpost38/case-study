const PQueue = require('p-queue');
const queue = new PQueue({concurrency: 1});

let count = 0;

for (let i = 0; i < 10; i++) {
  someSave('common').then((data) => console.log(`${data} someSave finish!`));
  queue.add(() => someSave('p-queue').then((data) => console.log(`${data} someSave finish!`)));
}

function someSave (message) {
  return new Promise((resolve, reject) => {
    const index = count ++;
    console.log(`${message}: someSave start... ${index}`);
    return setTimeout(() => {
      resolve(index);
    }, 2000);
  });
}

queue.onEmpty().then(() => {
	console.log('queue finish!');
});
