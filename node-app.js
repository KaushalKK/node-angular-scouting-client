'use strict';

var http = require('http');
var path = require('path');
var express = require('express');
var errorhandler = require('errorhandler');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
	app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function () {
	console.log('Scouting client listening on port ' + app.get('port'));
});