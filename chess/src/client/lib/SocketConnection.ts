import * as io from 'socket.io';

export class SocketConnection {
    socket: any;
    constructor(url:string) {
        this.socket = io(url, {});
    }
}