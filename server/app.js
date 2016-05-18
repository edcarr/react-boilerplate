var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.all('/*', function(req, res) {
	res.send('hello world');
});

app.listen(PORT, function(){
	console.log('Server running on port: ' + PORT);
});