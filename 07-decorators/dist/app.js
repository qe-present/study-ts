"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidators = {};
function Required(self, propName) {
    registeredValidators[self.constructor.name] = Object.assign(Object.assign({}, registeredValidators[self.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumber(self, propName) {
    registeredValidators[self.constructor.name] = Object.assign(Object.assign({}, registeredValidators[self.constructor.name]), { [propName]: ['positive'] });
}
function Validate(self) {
    const objValidatorConfig = registeredValidators[self.constructor.name];
    console.log(objValidatorConfig); // {Course: {title: ['required'], price: ['positive']}}
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            console.log(validator);
            switch (validator) {
                case 'required':
                    isValid = isValid && !!self[prop];
                    break;
                case 'positive':
                    isValid = isValid && self[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!Validate(createdCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(createdCourse);
});
