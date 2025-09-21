"use strict";
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["OTHER"] = 2] = "OTHER";
})(Sex || (Sex = {}));
const person = {
    name: "John",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    sex: Sex.MALE,
    about: {
        sad: true,
        height: 170
    }
};
// person.role.push('admin');
// person.role[1]='editor';
// console.log(person.role);
person.role = [0, 'admin'];
let favoriteActivities;
favoriteActivities = ['Sports', 1];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
console.log(person.name);
console.log(person.sex);
