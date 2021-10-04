const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('API is working properly');
});

app.use(express.static(__dirname + '/public'));

// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve('index.html'));
// });

app.get('/life', (req, res) => {
  res.send('life pageeee');
});

app.listen(4000, (err) => {
  if (err) console.log(err);
  console.log('Server running on 3000...');
});
