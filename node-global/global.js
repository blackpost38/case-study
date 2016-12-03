import express from 'express';
const app = express();

let count = 0;

app.get('/', function (req, res) {
  res.send(`Hello, World! ${count++}`);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});