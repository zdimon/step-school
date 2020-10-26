"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var config_1 = require("./../config");
var Board = /** @class */ (function () {
    function Board() {
<<<<<<< HEAD
        this.desk = [];
        for (var index = 0; index < config_1.config.height; index++) {
            {
                var element = this.desk[index];
                for (var index_1 = 0; index_1 < config_1.config.width; index_1++) {
                    {
                        var element_1 = this.desk[index_1];
                    }
                }
=======
        this.file = [];
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 20; j++) {
                this.file.push({
                    x: i,
                    y: j,
                    color: 'red',
                    borderColor: 'green',
                    border: 1,
                    power: 50,
                    actor: {}
                });
>>>>>>> 3648459c2d214c875d6483d0c3432cbb89f483e7
            }
        }
    }
    Board.prototype.getBoard = function () {
<<<<<<< HEAD
        return this.desk;
=======
        return this.file;
>>>>>>> 3648459c2d214c875d6483d0c3432cbb89f483e7
    };
    return Board;
}());
exports.Board = Board;
