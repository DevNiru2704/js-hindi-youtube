// function sayMyName(){
//     console.log("N")
//     console.log("I")
//     console.log("R")
//     console.log("M")
//     console.log("A")
//     console.log("L")
//     console.log("Y")
//     console.log("A")
// }

// sayMyName();//Note to self: sayMyName is the reference and () is the execution. Important for React!!

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

// addTwoNumbers(3,4)
// const sum=addTwoNumbers(5,3)
// console.log(sum); //Result will be undefined because the function itself did not return any value to the variable

// function addTwoNumbers(number1,number2){ //number1 and number2 are known as parameters
//     return number1+number2;
// }

// const sum=addTwoNumbers(4,8); //Here 4 and 8 are known as arguments
// console.log(sum); // Now there will be no undefined.

// function userLoginMessage(username){
//     return `${username} just logged in`
// }

// console.log(userLoginMessage("Nirmalya"))

function userLoginMessage(username="sam"){ //default values
    return `${username} just logged in`
}

// console.log(userLoginMessage("Nirmalya"))
// console.log(userLoginMessage()) //default value will print

function calculateCartPrice(...num){ //Rest operator in javascript. Also known as the spread operator in different use cases. But here it is known as rest operator.
    return num;
}

// console.log(calculateCartPrice(200,300,400))

const user = {
    username:"Nirmalya Mandal",
    price:100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);

const myArr=[1,2,3,4,5]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr))