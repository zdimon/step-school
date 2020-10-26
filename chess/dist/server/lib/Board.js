"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var config_1 = require("./../config");
var Board = /** @class */ (function () {
    function Board() {
        this.board = [];
        console.log(config_1.config);
        for (var i = 0; i < config_1.config.height; i++)
            for (var j = 0; j < config_1.config.width; j++) {
                var cell = {
                    x: 1,
                    y: 2,
                    color: 'red',
                    borderColor: 'green',
                    border: 1,
                    power: 50,
                    actor: {}
                };
                this.board.push(cell);
            }
    }
    Board.prototype.getBoard = function () {
        return this.board;
    };
    return Board;
}());
exports.Board = Board;
