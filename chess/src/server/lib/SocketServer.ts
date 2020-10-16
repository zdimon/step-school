export class SocketServer {

    constructor(io: any) {
        io.on('connection', (socket) => {
            console.log('Somebody got it!!!');
            console.log(`${socket.id}`);
        })
    }

}