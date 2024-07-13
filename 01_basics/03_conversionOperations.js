"use strict";

let score="33";

//console.log(typeof score); //we can use any one of syntax. Both will give same results.
//console.log(typeof(score));

let valueInNumber=Number(score);

//console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => NaN => Not a Number. It also comes under the number datatype
//true => 1; false => 0
//undefined => NaN

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);

//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);

//1 => true; 0 => false
//"" => false ; "anystring" =>true

let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

