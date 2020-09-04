import { Dog } from "./lib";
import { Animal } from "./lib";

// var dog = new Animal('Muhtar');
// console.log(dog);
// dog.show();

var dog = new Dog('Muhtar');
console.log(dog);
dog.show();

var cat = new Dog('siska');
cat.go();
dog.go();
dog.go = function(){
    console.log('sssss');
}
dog.go();
cat.go();

Animal.prototype.show = function(){
    console.log('changed show');
}

dog.show();
cat.show();