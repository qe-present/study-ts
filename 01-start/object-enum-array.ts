enum Sex {
    MALE,
    FEMALE,
    OTHER
}

const person:{
    name: string; //string type
    age: number; //number type
    hobbies: string[]; //array type
    role: [number,string]; //tuple type
    sex: Sex; //enum type
    about: any; //any type
} = {
    name: "John",
    age: 30,
    hobbies:['Sports','Cooking'],
    role:[2,'author'],
    sex: Sex.MALE,
    about:{
        sad: true,
        height: 170
    }
}
// person.role.push('admin');
// person.role[1]='editor';
// console.log(person.role);
person.role=[0,'admin'];
let favoriteActivities: any[];
favoriteActivities = ['Sports',1];
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
console.log(person.name);
console.log(person.sex);
