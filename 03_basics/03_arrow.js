const user={
    username:"Nirmalya",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Ram"
// user.welcomeMessage()
// console.log(this) //Since we are in the node, we will get a empty. But when we try this in the browser console, we are inside the window object, so it will not be a window object.

// function chai(){
//     console.log(this)
// }
// chai()

//*************************************************Arrow Function ************************************

const  chai=() =>{ //This is an arrow function
    let username="Nirmalya"
    console.log(this)

}

// chai()

// const addTwo=(num1,num2) =>{ //This process is also known as explicit return
//     return num1+num2
// }

// const addTwo=(num1,num2) => num1+num2 //This process is known as implicit return. Used when our has single lines
// const addTwo=(num1,num2) => (num1+num2) //we can also give parenthesis. Important for react.
// console.log(addTwo(5,6))

// const funcOne=() => ({username:"Nirmalya"}) //Objects
// console.log(funcOne())

// const myArray=[1,2,3,4,5]
// myArray.forEach((element)=>(console.log(element)))