export function sayHello( ) {
    return `Hello!!!`;
};   

export var Animal = function(name: string): void {
    this.name = name;
    this.go = function(){
        console.log('gogogogo');
    }
} 
Animal.prototype.show = function() {
    console.log('Drawing object..');
}


export var Dog = function (name: string): void {
    Animal.call(this,name);
    this.bite = function(){
        console.log('Biting');
    }
    
}

Dog.prototype = Object.create(Animal.prototype);