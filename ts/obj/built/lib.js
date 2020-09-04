"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Animal = exports.sayHello = void 0;
function sayHello() {
    return `Hello!!!`;
}
exports.sayHello = sayHello;
;
exports.Animal = function (name) {
    this.name = name;
    this.go = function () {
        console.log('gogogogo');
    };
};
exports.Animal.prototype.show = function () {
    console.log('Drawing object..');
};
exports.Dog = function (name) {
    exports.Animal.call(this, name);
    this.bite = function () {
        console.log('Biting');
    };
};
exports.Dog.prototype = Object.create(exports.Animal.prototype);
//# sourceMappingURL=lib.js.map