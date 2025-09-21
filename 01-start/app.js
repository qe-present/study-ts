"use strict";
let useInput;
// let useInput:any
let userName;
useInput = 5;
useInput = 'hello';
if (typeof useInput === 'string') {
    userName = useInput;
}
function generateError(message, code) {
    throw { message, code };
}
let rs = generateError('An error occurred', 500);
console.log(rs);
