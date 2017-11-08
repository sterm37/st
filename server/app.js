const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use('/', express.static(path.join(__dirname, './../dist')));

app.get('/', (req, res) => {
  return res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})
