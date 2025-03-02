let nameArray:Array<string>=['Max','Anna']; // string[]
// nameArray[0].split(' ')
const promise:Promise<number>=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10);
    },2000);
})
promise.then(data=>{
    console.log(data)
})