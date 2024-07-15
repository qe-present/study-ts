function add(a, b) {
    return a + b;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function printResult1(num) {
    console.log('Result: ' + num);
    // return; 可以省略，因为undefined是默认返回类型
}
printResult1(add(5, 12));
