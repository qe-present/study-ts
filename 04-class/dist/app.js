"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user1;
user1 = new Person();
// user1.name='asdwasda'
user1.greet('Hi there - I am');
