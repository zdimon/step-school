import { config } from './../config';

export class Board 
{
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
    }
}