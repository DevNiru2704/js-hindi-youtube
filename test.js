let str="            Apple              "
// console.log(str.length)
// console.log(str.trim().length)
// String.prototype.trueLength=function(){
//     return this.trim().length
// }

// console.log(str.trueLength())
// console.log("               Nirmalya            ".length)
// console.log("               Nirmalya            ".trueLength())

Object.prototype.helloMessage=function(){
    console.log("Hello this is a function made by me inside the object constructor prototype.")
    return 2+2;
}

const func=function(){}
const str2="adsasadad"

console.log(func.helloMessage())
console.log(str2.helloMessage())