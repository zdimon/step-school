var app = {};

const { internet: {userName},commerce:{price} } = faker
console.log(userName())
function generateAge() {
   return Math.floor(Math.random()*20) + 10
}
/*https://picsum.photos/200/300*/ 
class User{
    constructor(name, age, img)
     { 
        this.name = name || userName()
        this.age = age || generateAge()
        this.img = 'https://picsum.photos/200/300/?random'                  
     }
     get info()
     {
        return this._info
     }
     set info(value){
        this._info = value
     }
     get img(){
         return this._img 
     }
     set img(value){
        this._img =`${'https://picsum.photos/200/300/?random'}`
     }
}



class Card extends User {
    constructor( username, age, pic ){
        super();
    }

    render()
    {
        $('#card-container').append(`
        
        <img src = "${ this.img }"></div>
        ${ this.age }<br>
        <div>${this.name}<br> `)
    }
}

let user = new User();
let card = new Card();

console.dir(user);

card.render();



console.dir(user)
