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
}