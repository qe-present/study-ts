let useInput:unknown
// let useInput:any
let userName:string
useInput = 5
useInput = 'hello'
if(typeof useInput === 'string'){
    userName = useInput
}

function generateError(message:string, code:number):never{
    throw {message, code}
}
let rs=generateError('An error occurred', 500)
console.log(rs)