const { internet: { userName }, commerce: { price } } = faker;

function generateAge(){
    return Math.floor( Math.random() * 10 ) + 10
}

class User{
    constructor( username, age){
        this.username = username || userName();
        this.age = age || generateAge();
        this.pic = "https://picsum.photos/200/300/?random"
    }
}

class Card extends User {
    constructor( username, age, pic ){
        super();
    }

    render()
    {
        $('#card-container').append(`<div>${this.username}<br> 
        ${ this.age }<br>
        <img src = "${ this.pic }"></div>`)
    }
}

let user = new User();
let card = new Card();

console.dir(user);

card.render();