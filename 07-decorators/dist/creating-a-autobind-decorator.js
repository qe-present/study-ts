"use strict";
// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false,
//         get() {
//             const boundFn = originalMethod.bind(this);
//             return boundFn;
//         }
//     };
//     return adjDescriptor;
// }
// class Printer{
//     message: string = 'Hello there!';
//     @Autobind
//     print(){
//         console.log(this.message);
//     }
// }
// const printer = new Printer();
// const button=document.querySelector('button')!
// // button.addEventListener('click',printer.print.bind(printer));
// // button.addEventListener('click',()=>printer.print());
// button.addEventListener('click',printer.print);
