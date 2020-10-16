"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board() {
        this.board = [];
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 20; j++) {
                this.board.push({
                    x: i,
                    y: j,
                    color: 'red',
                    borderColor: 'green',
                    border: 1,
                    power: 50,
                    actor: {}
                });
            }
        }
    }
    Board.prototype.getBoard = function () {
        return this.board;
    };
    return Board;
}());
exports.Board = Board;
