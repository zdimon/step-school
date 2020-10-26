import { config } from './../config';

export class Board 
{
    board = [];
    constructor()
    {
        console.log(config);

        for(let i = 0; i < config.height; i++)
            for(let j = 0; j < config.width; j++)
            {
                let cell = 
                {
                    x: 1, 
                       y: 2, 
                       color: 'red', 
                       borderColor: 'green', 
                       border: 1, 
                       power: 50,
                       actor: {}
                };
                this.board.push(cell)
            }
    }

    getBoard() {

        return this.board;
    }

}