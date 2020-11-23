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

    constructor() {

    }

    show() {

        const tpl = `
        <div>
            <img src="${this.image}" width="${this.size}" />
            <p>
            <button>Move</button>
            <button>Voice</button>
            </p>
        <div/>
        `;

        $('#root').append(tpl);
    }

    move(){
        console.log('I an mooving');
    }
}

class Dog extends Animal {

    constructor(image,name) {
        super();
        this.image = image;
        this.name = name;
    }

    voice(){
        console.log('gav gav');
    }
}

class Cat extends Animal {

    constructor(image,name) {
        super();
        this.image = image;
        this.name = name;
    }

    voice(){
        console.log('miau miauuu!');
    }
}


const dog = new Dog('bobik.png','Bobik');
dog.show();
const cat = new Cat('murka.png','Murka');
cat.show();





