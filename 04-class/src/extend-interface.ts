// type Named={
//     readonly name: string;
// }
// interface Greetable extends Named {
//     greet(phrase: string): void;
// }
// class Person implements Greetable{
//     name: string;
//     age=30;
//     constructor(n: string){
//         this.name=n;
//     }
//     greet(phrase: string){
//         console.log(phrase);
//     }
// }
// let user1: Greetable;
// user1=new Person('Max');
// // user1.name='asdwasda'
// user1.greet('Hi there - I am');