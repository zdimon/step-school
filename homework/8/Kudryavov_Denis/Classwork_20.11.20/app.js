const{ internet: {userName}, commerce: {price}} = faker


function generateAge(params) {
    return Math.floor(Math.random() * 10) + 10
}
/*

class Person
{
    constructor(name, age)
    {
        this.name = name || userName();
        this.age = age   || generateAge();  
    }

    get info()
    {
        return this._info
    }   
    set info(value)
    {
        this._info = value
    }

    getlocation()
    {
        return 'Empty'
    }
}


class Student extends Person
{
    constructor(name, age, salary)
    {
        super(name, age)
        this.salary = salary || price;  
    }

    get salary()
    {
        return this._salary  
    }   
    set salary(value)
    {
        this._salary = `${value}$`
    }

}


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
*/

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

const foo = new Person()

console.dir(Name)




