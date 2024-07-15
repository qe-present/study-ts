type Combinable = number|string;
type ConversionDescriptor='as-number'|'as-text';
function combine(
    a: Combinable,
    b: Combinable,
    resultConversion: ConversionDescriptor
){
    let result;
    if (typeof a ==='number' || typeof b ==='number' || resultConversion==='as-number') {
        result = +a + +b;
    }else{
        result=a.toString()+b.toString();
    }
    if(resultConversion==='as-number'){
        return +result;
    }else {
        return result.toString();
    }

}
const res=combine('5','2.8','as-text');
console.log(res);
