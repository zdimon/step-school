console.log('Starting server...');
var express = require('express');
const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server, {});

app.use(express.static('.'));

server.listen(5000, () => {
    console.log('My server is running on the 5000 port!');
})


