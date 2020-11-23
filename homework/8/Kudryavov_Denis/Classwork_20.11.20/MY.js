class Animal
{
    constructor(canjump){
        this.canjump = canjump;
    }
    
    size = 250;
    show(){
        
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

        $('#con').append(tpl);
        $(`#m-button-${this.name}`).on('click', () => { this.move() } );
        $(`#v-button-${this.name}`).on('click', () => { this.voice() } );
        $(`#j-button-${this.name}`).on('click', () => { this.jump() } );
       
    }
    move(){
        console.log('I am moving');
    }

    jump(){
       
        this.canjump.jump();
    }
    
}

class Dog extends Animal
{
    constructor(image, name, canjump)
    {
        super(canjump);
        this.image = image;
        this.name = name;
        this.canjump = canjump;
    }

    voice(){
        console.log('GAV GAV');
    }


}

class Cat extends Animal
{
    constructor(image, name, canjump)
    {
        super(canjump);
        this.image = image;
        this.name = name;
        this.canjump = canjump;
    }


    voice(){
        console.log('Myu');
    }
}

class WCat extends Animal
{
    constructor(image, name, canjump)
    {
        super(canjump);
        this.image = image;
        this.name = name;
        this.canjump = canjump;
    }


    voice(){
        console.log('Myu');
    }
    

}

class cantJump
{
    jump(){
        console.log('I cant jumping');
    }
}

class canJump
{
    jump(){
        console.log('I can jumping');
    }
}

const dog = new Dog('bobik.png', 'Bobik', new canJump());
dog.show();

const cat = new Cat('murka.png', 'Sonya', new canJump());
cat.show();

const wcat = new WCat('catwood.png', 'ku', new cantJump());
wcat.show();

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




