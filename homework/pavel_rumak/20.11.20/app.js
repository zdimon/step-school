

const { internet: {userName},commerce:{price} } = faker
console.log(userName())
function generateAge() {
   return Math.floor(Math.random()*10) + 10
}

class Person 
{
     constructor(name, age)
     { 
        this.name = name || userName()
        this.age = age || generateAge()                    
     }
     get info()
     {
        return this._info
     }
     set info(value){
        this._info = value
     }
     getLocation(){
        return 'Empty'
     }
}

class Student extends Person{
   constructor(name, age, salary){
      super(name,age)
      this.salary = salary || price
   }
   set salary(value){
      this._salary = `${value}$`
   }
   get salary(){
      return this._salary
   }
   getLocation(){
      return 'California'
   }

}

const student = new Student()

student.salary = price()

console.dir(student)

function User(name, age) {
   let _age = generateAge()
   this.age = age || _age
   this.name = name
}

User.prototype.getName = function(){
   return `User: ${this.name}`
}

Object.defineProperty(User.prototype, 'name', {
   get() {
      return this._name
   },
   set(value) {
      this._name = value || userName()
   },

})

function Auth(name){
   this.name = name || userName()
}

Auth.prototype = Object.create(User.prototype)

Auth.prototype.getName = function(){
   return `Auth: ${this.name}`
}

const auth = new Auth()
const user = new User()

console.log(auth.getName(), user.getName())