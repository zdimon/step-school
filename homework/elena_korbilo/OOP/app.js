// var Animal = function(){

// }

// Animal.prototype.move = function(){

// }

// var Dog = function() {

// }

// Dog.prototype = Animal.prototype;

// var dog = new Dog();

class Animal {
    size = 300;

    constructor(canjump) {
        this.canjump = canjump;
    }

    show() {
        const tpl = `
        <div>
            <img src=${this.img} width='${this.size}'>
            <p>
            <button id="m-button-${this.name}">Move</button>
            <button id="v-button-${this.name}">Voice</button>
            <button id="j-button-${this.name}">Jump</button>
            </p>
        </div>`;

        $('#root').append(tpl);

        $(`#m-button-${this.name}`).on('click', () => { this.move() })
        $(`#v-button-${this.name}`).on('click', () => { this.voice() })
        $(`#j-button-${this.name}`).on('click', () => { this.jump() })
    }

    move() {
        console.log('I am move')
    }

    jump() {
        this.canjump.jump();
    }
}

class AnimalCanJump {
    jump() {
        console.log('I am jump')
    }
}

class AnimalCanNotJump {
    jump() {
        console.log('I cannot jumping. Sorry!')
    }
}

class Dog extends Animal {
    constructor(img, name, canjump) {
        super(canjump);
        this.img = img;
        this.name = name;
        this.canjump = canjump;
    }

    voice() {
        console.log('gav gav')
    }

    
}

class Cat extends Animal {
    constructor(img, name, canjump) {
        super(canjump);
        this.img = img;
        this.name = name;
        this.canjump = canjump;
    }

    voice() {
        console.log('myau myau')
    }
}

class WoodenCat extends Animal {
    constructor(img, name, canjump) {
        super(canjump);
        this.img = img;
        this.name = name;
        this.canjump = canjump;
    }

    voice() {
        console.log('myau myau')
    }
}

let dog = new Dog('dog.jpg', 'Bobik', new AnimalCanJump());
dog.show();

let cat = new Cat('cat.jpg', 'Murka', new AnimalCanJump());
cat.show();

let woodencat = new WoodenCat('woodencat.jpg', 'Woodcat', new AnimalCanNotJump());
woodencat.show();