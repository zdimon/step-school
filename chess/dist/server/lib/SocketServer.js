"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketServer = void 0;
var SocketServer = /** @class */ (function () {
    function SocketServer(io) {
        io.on('connection', function (socket) {
            console.log('Somebody got it!!!');
            console.log("" + socket.id);
        });
    }
    return SocketServer;
}());
exports.SocketServer = SocketServer;
