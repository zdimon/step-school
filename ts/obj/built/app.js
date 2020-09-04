"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
const lib_2 = require("./lib");
// var dog = new Animal('Muhtar');
// console.log(dog);
// dog.show();
var dog = new lib_1.Dog('Muhtar');
console.log(dog);
dog.show();
var cat = new lib_1.Dog('siska');
cat.go();
dog.go();
dog.go = function () {
    console.log('sssss');
};
dog.go();
cat.go();
lib_2.Animal.prototype.show = function () {
    console.log('changed show');
};
dog.show();
cat.show();
//# sourceMappingURL=app.js.map