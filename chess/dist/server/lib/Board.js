"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.getBoard = function () {
        return [
            [
                {
                    x: 1,
                    y: 2,
                    color: 'red',
                    borderColor: 'green',
                    border: 1,
                    power: 50,
                    actor: {}
                }
            ]
        ];
    };
    return Board;
}());
exports.Board = Board;
