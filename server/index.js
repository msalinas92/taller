var express = require('express');
var archivoJson = require('./archivo.json');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/personas', function(req, res) {
  res.json(archivoJson);
});

app.listen(3000, function () {
  console.log('servidor iniciado!');
});

