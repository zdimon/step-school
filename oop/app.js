// var Animal = function() {
  
// }
// Animal.prototype.move = function() {

// }

// var Dog = function() {

// }

// Dog.prototype = Animal.prototype;

// var dog = new Dog();

class Animal {
    size = 150;

    constructor(canjump) {
        this.canjump = canjump;
        console.log(this.canjump);
    }

    show() {

        const tpl = `
        <div>
            <img src="${this.image}" width="${this.size}" />
            <p>
            <button id="m-button-${this.name}">Move</button>
            <button id="v-button-${this.name}">Voice</button>
            <button id="j-button-${this.name}">Jump</button>
            </p>
        <div/>
        `;

        $('#root').append(tpl);
        $(`#m-button-${this.name}`).on('click',() => {this.move()});
        $(`#v-button-${this.name}`).on('click',() => { this.voice() });
        $(`#j-button-${this.name}`).on('click',() => {this.jump()});
    }

    move(){
        console.log('I am mooving');
    }

    jump(){
        
        this.canjump.jump();
    }
}

class Dog extends Animal {

    constructor(image,name,canjump) {
        super(canjump);
        this.image = image;
        this.name = name;
    }

    voice(){
        console.log('gav gav');
    }
}

class Cat extends Animal {

    constructor(image,name,canjump) {
        super(canjump);
        this.image = image;
        this.name = name;
    }

    voice(){
        console.log('miau miauuu!');
    }
}


class WoodenCat extends Animal {

    constructor(image,name,canjump) {
        super(canjump);
        this.image = image;
        this.name = name;
    }

    voice(){
        console.log('miau miauuu!');
    }
    jump(){
        console.log('I can not jumping SORRY!!!');
    }
}

class CanJump {
    jump() {
        console.log('jump jump');
    }
} 


class CanNotJump {
    jump() {
        console.log('I can not Jump!');
    }
} 



const dog = new Dog('bobik.png','Bobik', new CanJump());
dog.show();

const cat = new Cat('murka.png','Murka', new CanJump());
cat.show();

cat.canjump = new CanNotJump();


const woodencat = new WoodenCat('catwood.png','MurkaWood', new CanNotJump());
woodencat.show();





