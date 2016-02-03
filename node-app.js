'use strict';

var http = require('http');
var path = require('path');
var express = require('express');
var errorhandler = require('errorhandler');

var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
	app.use(errorhandler());
}

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

http.createServer(app).listen(server_port, server_ip_address, function(){
  console.log("Scouting Client listening on " + server_ip_address + ", port " + server_port)
});