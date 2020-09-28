export const CONSTANT = 'localhost';

export function hello() {
    console.log('hello from func');
}

export class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(this.name);
    }
}