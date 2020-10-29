<<<<<<< HEAD
<<<<<<< HEAD
import { config } from './../config';

export class Board {
    board=[];
    constructor(){
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                this.board.push(
                    {
                        x: i, 
                        y: j, 
                        color: 'red', 
                        borderColor: 'green', 
                        border: 1, 
                        power: 50,
                        actor: {}
                    }
                )

                
            }
            
        }
    }

    getBoard() {
        return this.board;
    }
=======
=======
>>>>>>> 5502a1d65f9527945308cc4572ff11b8e63e07ec
import { config } from "./../config";

export class Board {
    desk = [];
    constructor(){
        for (let i = 0; i < config.height; i++) {
            {
                for (let j = 0; j < config.width; j++) {
                    {
                        this.desk.push({x:i,y:j});
                    }
                }
            }
            
        }
    }

    getBoard() 
    {
        return this.desk;
=======
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
<<<<<<< HEAD
>>>>>>> b576537d0e9bc95b2634dbc6580eba35e90ae443
=======
>>>>>>> 3648459c2d214c875d6483d0c3432cbb89f483e7
    }
    getBoard() 
    { 
        return this.file; 
>>>>>>> d9f27a4ec08c2405ea28f27a785118a95dbe23db
    }

>>>>>>> 5502a1d65f9527945308cc4572ff11b8e63e07ec
}