var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('static', express.static('css'));
app.use('static', express.static('img'));
app.use('static', express.static('js'));
app.use('static', express.static('vendor'));

app.listen(3000, function() {
	console.log('Connected!');
});