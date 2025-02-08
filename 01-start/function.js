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
function addAndHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
var combineValues;
combineValues = add;
// combineValues=printResult;
// console.log(combineValues(8, 8));
addAndHandle(10, 20, function (res) {
    console.log(res);
});
