var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  var data  = [ {'nombre' : 'Daniel' } ];
  res.json(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

