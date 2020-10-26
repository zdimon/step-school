import { config } from './../config';

export class Board 
{
<<<<<<< HEAD
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
=======
    file= [];

    constructor()
    {
        for ( let i=0; i<20; i++)
        {
            for ( let j=0; j<20; j++)
            {
                this.file.push
                ({
                    x: i,
                    y: j,
                    color: 'red', 
                    borderColor: 'green', 
                    border: 1, 
                    power: 50,
                    actor: {}
                })
            }
        }
    }
    getBoard() 
    { 
        return this.file; 
>>>>>>> d9f27a4ec08c2405ea28f27a785118a95dbe23db
    }

}