var http = require("http");
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res){

  res.redirect('/views/index.html');
});

app.listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

console.log("Addison is looking");