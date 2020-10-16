"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketConnection = void 0;
var io = require("socket.io");
var SocketConnection = /** @class */ (function () {
    function SocketConnection(url) {
        this.socket = io(url, {});
    }
    return SocketConnection;
}());
exports.SocketConnection = SocketConnection;
