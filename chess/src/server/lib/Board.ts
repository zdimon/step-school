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
import { config } from "./../config";

export class Board {
    desk = [];
    constructor(){
            for (let i = 0; i < config.width; i++) 
            {
                const element = this.desk[i];
                for (let j = 0; j < config.height; j++)
                    {
                        const element = this.desk[j];
                    }
            }
        }
    

    getBoard() {
        return this.desk;
        }
>>>>>>> b576537d0e9bc95b2634dbc6580eba35e90ae443
}