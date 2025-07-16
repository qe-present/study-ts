function combine(a, b, resultConversion) {
    var result;
    if (typeof a === 'number' || typeof b === 'number' || resultConversion === 'as-number') {
        result = +a + +b;
    }
    else {
        result = a.toString() + b.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var res = combine('5', '2.8', 'as-text');
console.log(res);
