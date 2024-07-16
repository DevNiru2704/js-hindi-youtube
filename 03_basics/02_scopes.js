if(true){
    //Inside the curly braces, also known as the block is known as the block scope.
    let a=20
    const b=30
    var c=40
}

//Outside the curly braces, also known as the block is known as the global scope.

// console.log(a) //will give error because let and const has block {} scope. So it cannot be used outside of a block
// console.log(b) //Same as above
// console.log(c) // var has function based scope meaning it can be used anywhere in its parent scope. Here its parent scope is the Global scope. So as a result var can be used anywhere in the program

//note to self: the global scope in the code environment like this codespace and the global scope in the window are different. Important for interview!!


function one(){
    const username="nirmalya"
    function two(){
        const website="wikipedia"
        console.log(username)
    }
    // console.log(website) //will give error because its not defined in a higher or current level of scope
    two()
}

// two(); //also give an error because two is defined in a lower level but we are trying to call it from the higher level of scope

// one()

if(true){
    const username="Nirmalya"
    if(username === "Nirmalya"){
        const website=" wikipedia"
        console.log(username+website)
    }
    // console.log(website)//Will give error
    
}
// console.log(username) //Will give error

// console.log(addOne(5))
function addOne(num){ //we can a call a function before it is declared if we define a function in this way.
    return num+1;
}

// console.log(addTwo(5)) //In this case we will get an error.
const addTwo=function(num){
    return num+2;
}
// console.log(addTwo(5))