"use strict";
// interface ValidatorConfig {
//     [property: string]: {
//         [validatableProp: string]: string[] // ['required','positive']
//     }
// }
// const registeredValidators: ValidatorConfig = {}
// function Required(self: any, propName: string) {
//     registeredValidators[self.constructor.name] = {
//         ...registeredValidators[self.constructor.name],
//         [propName]: ['required']
//     }
// }
// function PositiveNumber(self: any, propName: string) {
//     registeredValidators[self.constructor.name] = {
//         ...registeredValidators[self.constructor.name],
//         [propName]: ['positive']
//     }
// }
// function Validate(self: any) {
//     const objValidatorConfig = registeredValidators[self.constructor.name]
//     console.log(objValidatorConfig)  // {Course: {title: ['required'], price: ['positive']}}
//     if (!objValidatorConfig) {
//         return true
//     }
//     let isValid = true
//     for (const prop in objValidatorConfig) {
//         for (const validator of objValidatorConfig[prop]) {
//             console.log(validator)
//             switch (validator) {
//                 case 'required':
//                     isValid = isValid && !!self[prop]
//                     break
//                 case 'positive':
//                     isValid = isValid && self[prop] > 0
//                     break
//             }
//         }
//     }
//     return isValid
// }
// class Course{
//     @Required
//     title: string
//     @PositiveNumber
//     price: number
//     constructor(title: string, price: number) {
//         this.title = title
//         this.price = price
//     }
// }
// const courseForm=document.querySelector('form')
// courseForm?.addEventListener('submit', event => {
//     event.preventDefault()
//     const titleEl = document.getElementById('title') as HTMLInputElement
//     const priceEl = document.getElementById('price') as HTMLInputElement
//     const title = titleEl.value
//     const price = +priceEl.value
//     const createdCourse = new Course(title, price)
//     if (!Validate(createdCourse)) {
//         alert('Invalid input, please try again!')
//         return
//     }
//     console.log(createdCourse)
//
//
// })
