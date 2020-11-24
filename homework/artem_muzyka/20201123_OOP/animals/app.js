// let Animal =function(){

// }

// // в случае наследования
// Animal.prototype.move()= function(){

// }

// let dog_p = function () {
    
// }
// dog_p.prototype = Animal.prototype;

// let dog = new Animal();



/********************************/
class Animal{
    constructor(){
        this.size = 50;
        this.name;
        this.canjump;

        this.btn_voice = "<button id='voice_${this.name}'>Get voice</button>";
        this.btn_jump = "<button id='jump_${this.name}'>Jump</button>";
        this.btn_move = "<button id='move_${this.name}'>Move</button>";
    }

    show(){
        $('#root').append(`${this.tpl}`);
    }

    jump(){ console.log('i`m jumping') }
    move(){ console.log('i`m moving') }
}

/********************************/
class Dog extends Animal{
    constructor( name ){
        super(); // для вызова конструктора родителя

        this.name = name || 'dog' ;
        this.sound = 'dog_voice.mp3'        
        this.image = 'dog.jpg';
        this.canjump = new CanJump();

        this.tpl = `
            <div> 
            <img src="${this.image}" size="${this.size}"><br> 
            ${this.btn_voice}
            ${this.btn_jump}
            ${this.btn_move}
            </div>`
    }

    voice(){
        // $('#root').append(`<audio src='${this.sound}' autoplay="true"></audio>`);
        alert('dfgdfgdf');
    }
}

/********************************/
class Cat extends Animal{
    constructor(name){
        super(); // для вызова конструктора родителя

        this.name = name || 'cat';
        this.sound = 'cat_voice.mp3'
        this.image = 'cat.jpg';
        this.canjump = new CanJump();

        this.tpl = `
            <div> 
            <img src="${this.image}" size="${this.size}"><br> 
            ${this.btn_voice}
            ${this.btn_jump}
            ${this.btn_move}
            </div>`
    }

    voice(){

        $(`#voice_${this.name}`).click( function () {
            // $('#root').append(`<audio src='${this.sound}' autoplay="true"></audio>`);
            alert('dfgdfgdf');
         } );
        
    }
}
/********************************/
class WoodenCat extends Animal{
    constructor(name){
        super(); // для вызова конструктора родителя

        this.name = name || 'woodencat';
        this.sound = 'woodencat_voice.mp3'
        this.image = 'woodencat.jpg';
        this.canjump = new CannotJump();

        this.tpl = `
            <div> 
            <img src="${this.image}" size="${this.size}"><br> 
            ${this.btn_voice}
            ${this.btn_jump}
            ${this.btn_move}
            </div>`

    }

    voice(){

        $(`#voice_${this.name}`).click( function () {
            // $('#root').append(`<audio src='${this.sound}' autoplay="true"></audio>`);
            alert('dfgdfgdf');
         } );
    }
}
/********************************/
class CanJump{
    constructor(){
        this.Do_jump = "I can jump";
    }
}
/********************************/
class CannotJump{
    constructor(){
        this.Do_jump = "I can`t jump";
    }
}

let a = new WoodenCat();
a.show();