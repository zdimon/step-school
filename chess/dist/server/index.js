console.log('Starting server...');
var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);
server.listen(5000, function () {
    console.log('My server is running on the 5000 port!');
});
