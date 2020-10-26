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
    }
}