"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketServer_1 = require("./lib/SocketServer");
console.log('Starting server...');
var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server, {});
var socketServer = new SocketServer_1.SocketServer(io);
app.use(express.static('.'));
server.listen(5000, function () {
    console.log('My server is running on the 5000 port!333333');
});
