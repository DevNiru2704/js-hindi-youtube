//Immediately Invoked Function Expressions(IIFE)

(function chai(){ //named IIFE
    console.log(`DB CONNECTED ONE`)
})(); //()() The first parenthesis is where is our function is located and the second parenthesis is our execution. IIFE helps in avoiding global scope pollution by encapsulating code within a local scope. This is especially useful in JavaScript where global variables can easily lead to conflicts. Also for multiple IIFEs, we must use the semicolon to avoid runtime errors.

(()=>(console.log(`DB CONNECTED TWO`)))(); //unnamed IIFE using arrow function

(function(){ //unnamed IIFE using function keyword
    console.log(`DB CONNECTED THREE`)
})();

((name)=>(console.log(`Welcome, my name is ${name}`)))("Nirmalya");

