"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketConnection_1 = require("./lib/SocketConnection");
var ChessBoard_1 = require("./lib/ChessBoard");
console.log('This is my client!!!');
var board = new ChessBoard_1.ChessBord();
console.log(board.getJson());
var connection = new SocketConnection_1.SocketConnection('http://localhost:5000');
