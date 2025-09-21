// 字符串索引签名
// 兼容其他属性
interface Product{
    name: string;
    [propName: string]: any;
}
// 数字索引签名
interface Result{
    [index: number]: string;
}
let p={
    name: '电脑',
    price: 1999
} as Product;
let r={
    0: 'hello',
} as Result;
console.log(p.name);
console.log(p.price);
console.log(r[0]);