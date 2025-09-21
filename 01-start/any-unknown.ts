// any 和 unknown 可以是任何类的父类，任何类型的变量都可以赋值给它们
// 但是 any 可以赋值给任何类的变量，而 unknown 只能赋值给 unknown 和 any
// 不能拿unknown 类型的变量去操作它的属性、方法,一般用于函数参数，但是any 可以

let num:Array<string>=['1','2']
let data:any=num;
let num1:unknown=[1,2]
// let data1:number=num1; // !!! ERROR !!!
function getData(value:any) {
    console.log(value.name)
}
function getData1(value:unknown){
    // console.log(value.name) // !!! ERROR !!!
}
console.log(data);
getData({
    name:'zhangsan'
})

