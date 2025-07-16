"use strict";
// function Logger(logString: string){
//     return function(constructor: Function) {
//         console.log(logString);
//         console.log(constructor);
//     }
// }
// function WithTemplate(template: string, hookId: string){
//     return function(constructor: any) {
//         console.log('Rendering template');
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor();
//         if(hookEl) {
//             hookEl.innerHTML = template;
//             hookEl.querySelector('h1')!.textContent = p.name
//
//         }
//     }
// }
// @WithTemplate('<h1>My Person Object</h1>','app') // 后执行这个
// @Logger('LOGGING - PERSON')  // 先执行这个
// class Person{
//     name: string='Max';
//     constructor() {
//         console.log('Creating a new person...');
//     }
// }
// const person = new Person();
// console.log(person);
