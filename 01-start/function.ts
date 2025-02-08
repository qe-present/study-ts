function add(a: number, b: number): number{
    return a + b;
}
function printResult(num: number): void{
    console.log('Result: ' + num);
}
function printResult1(num: number): undefined{
    console.log('Result: ' + num);
    // return; 可以省略，因为undefined是默认返回类型
}
function addAndHandle(a: number, b: number, cb: (num: number) => void){
    const result = a + b;
    cb(result);
}
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues=printResult;
// console.log(combineValues(8, 8));
addAndHandle(10,20,(res:number):void=>{
    console.log(res);
}
)