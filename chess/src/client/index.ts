import { SocketConnection } from './lib/SocketConnection';
import { ChessBord } from './lib/ChessBoard';

console.log('This is my client!!!');
var board = new ChessBord();
console.log(board.getJson());

var connection = new SocketConnection('http://localhost:5000')

