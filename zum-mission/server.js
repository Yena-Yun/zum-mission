const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log('Server running on 3000...');
});
