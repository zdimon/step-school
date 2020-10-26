"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var config_1 = require("./../config");
var Board = /** @class */ (function () {
    function Board() {
        this.desk = [];
        for (var index = 0; index < config_1.config.height; index++) {
            {
                var element = this.desk[index];
                for (var index_1 = 0; index_1 < config_1.config.width; index_1++) {
                    {
                        var element_1 = this.desk[index_1];
                    }
                }
            }
        }
    }
    Board.prototype.getBoard = function () {
        return this.desk;
    };
    return Board;
}());
exports.Board = Board;
