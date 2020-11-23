class Animal
{
    constructor(){}
    
    size = 50;
    show(){
        
        const tpl = `
        <div>
            <img src="${this.image}" width="${this.size}" />
            <p>
            <button id="m-button-${this.name}">Move</button>
            <button id="v-button-${this.name}">Voice</button>
            </p>
        <div/>
        `;

        $('#con').append(tpl);
        $(`#m-button-${this.name}`).on('click',this.move);
        $(`#v-button-${this.name}`).on('click',this.voice);
       
    }
    move(){
        console.log('I am moving');
    }
    
}

class Dog extends Animal
{
    constructor(image, size)
    {
        super();
        this.image = image;
        this.size = size;
    }

    voice(){
        console.log('GAV GAV');
    }

}

class Cat extends Animal
{
    constructor(image, size)
    {
        super();
        this.image = image;
        this.size = size;
    }

    voice(){
        console.log('Myu');
    }

}

const dog = new Dog('bobik.png', 'Bobik');
dog.show();
dog.voice();

const cat = new Cat('murka.png', 'Sonya');
cat.show();
cat.voice();

/*

const person = new Person()

function User(age, name) {

    let _age = generateAge()
    this.age = age || _age
    this.name = name
}

User.prototype.getName = function() {
    return `User: ${this.name}`
}

Object.defineProperty(User.prototype, 'name',
{
    get()
    {
        return this._name
    },
    set(value)
    {
        this._name = value || userName()
    }
})

function Auth(name) {
    this.name = name || userName()
}

Auth.prototype = Object.create(User.prototype)

Auth.prototype.getName = function() {
    return `Auth: ${this.name}`
}

const user = new User()
const auth = new Auth()

console.log(auth.getName(), user.getName())

class Person {
    constructor (Name, Age, img)
    {
        this.Name = Name || userName();
        this.Age = Age   || generateAge();
        this.img = img 
    }
    get info()
    {
        return this._info
    }

    set info(value)
    {
        return this._img
    }
}

class I extends Person
{
    constructor (Name, Age)
    {
        
    }
}
*/




