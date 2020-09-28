"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.hello = exports.CONSTANT = void 0;
exports.CONSTANT = 'localhost';
function hello() {
    console.log('hello from func');
}
exports.hello = hello;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(this.name);
    }
}
exports.User = User;
//# sourceMappingURL=lib.js.map