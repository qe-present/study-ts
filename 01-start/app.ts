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
printResult1(add(5, 12));
