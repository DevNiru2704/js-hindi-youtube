"use strict";
// **********************************Conversion**************************************************

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
//console.log(stringNumber);
//console.log(typeof stringNumber);



// ***********************************************Operations**************************************************

let value=3;
let negValue=-value;
//console.log(negValue);

//console.log(2 + 2)
//console.log(2 - 2)
//console.log(2 * 2)
//console.log(2 / 2)
//console.log(2 % 3)
//console.log(2 ** 10);

let str1="hello";
let str2=" Nirmalya";

//console.log(str1+str2);
//
//console.log("1"+2);
//console.log(1+"2");
//console.log("1"+"2");
//console.log("1"+2 + 3);
//console.log(1 + 2 + "3"); 
//
//console.log(3+4%5-9*8); 
//console.log(+true);
//console.log(+"");
//let num1,num2,num3;
//num1=num2=num3=0;
// note to self: dont write these kind of codes. it will not be accepted by companies.Always use parenthesis whenever possible.

let gameCounter=100;
gameCounter++;
console.log(gameCounter);




