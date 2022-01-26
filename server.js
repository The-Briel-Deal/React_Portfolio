<<<<<<< HEAD
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
=======
const express = require('express')

const app = express()
const port = 3000

app.use(express.static('build'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
>>>>>>> 5dfd15db985c24c4a3f747af823672de9c75f368
