"use strict";
// function WithTemplate(template: string, hookId: string) {
//     return function<T  extends {new(...args:any[]):{name:string}}>(originalConstructor: T) {
//         return class extends originalConstructor {
//             constructor(...args: any[]) {
//                 super();
//                 console.log('Rendering template'); // 类实例化时会执行这个
//                 const hookEl = document.getElementById(hookId);
//                 if (hookEl) {
//                     hookEl.innerHTML = template;
//                     hookEl.querySelector('h1')!.textContent = this.name
//
//                 }
//             }
//
//         }
//     }
// }
//
// @WithTemplate('<h1>My Person Object</h1>','app') // 后执行这个
// class Person{
//     name: string='Max';
//     constructor() {
//         console.log('Creating a new person...');
//     }
// }
