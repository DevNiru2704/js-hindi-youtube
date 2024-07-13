/*

Note to self: JavaScript is dynamically typed programming language. This means that we don't have to explicitly mention
the data type of a variable during declaration. Statically types programming language are programming language in which we have to explicitly mention the data type of a variable during declaration. For example: C, C++, Java, etc.


Types of data types:
1.Primitive Data Types
2.Non-Primitive Data Types or Reference data types

Primitive Data Types: String, Number, Boolean, BigInt, undefined, null, Symbol

Non-primitive data types or reference data types: Arrays, Objects, Functions


*/

//How to initialise symbols?

const id=Symbol("123");
const anotherId=Symbol("123"); //Although the two symbols may look like they have the same value, their values are not 
                               //same. They are unique.

//console.log(id==anotherId); //Result=false;

//Initialising BigInt
const bigNumber=BigInt(2132131312312223);//or 2132131312312223n Both way are same
//console.log(bigNumber);

//Initialising arrays
const heroes=["shaktiman","Superman","nagraj","doga"]; //So this is a string array.

//Initialising objects
let bioData={
    name:"Nirmalya Mandal",
    age:"19",
    dob:"27-09-2004"
}

//console.log(bioData);

//Funtion syntax. In JS we can also store function in variables.
const functionVariable=function myFirstFunction(){
    //console.log("Hello World");
}

//console.log(functionVariable); //The result will be exactly "[Function: myFirstFunction]" without the quotes.

//console.table([typeof heroes,typeof bioData,typeof functionVariable]); // for objects and array their types are object and
                                                                       // for function their type is object function.



/* ********************************* How does memory work in Javascript? *********************************

Types of memories:
1.Stack(For primitive data types)
2.Heap(For non-primitive data types.)

Here's the link to my figma diagram for stack and heap in javascript. 
https://www.figma.com/design/g2qeQUDsMwiccjkDV8CiPw/Types-of-memories-in-javascript?node-id=0-1&t=vFu9rv2hDApE7BAq-0
*/

let myName="Nirmalya Mandal"; //As soon as a primitive data variable is declared it, the memory assigned to it is a stack
                              //memory just like the diagram from the link.

let anotherName=myName;
//console.log(anotherName);

anotherName="John Doe"
//console.log(anotherName);
//console.log(myName); //We see that myName is not modified even though we gave the reference of myName in line 67.
                     //This is because in stack we are provided with a copy of myName instead of the original one

//For Reference Types:
let userOne={
    name:"Nirmalya Mandal",
    age:"19"
}

let userTwo={
    name:"John Doe",
    age:"20"
}

userTwo=userOne
userTwo.name="Ram"
//console.table([userOne,userTwo]); //We can see that when changing the name inside the  userTwo object, the name inside
                                  //the userOne object is also changed. This is because unlike stack, objects share
                                  //the heap memory where two or more non-priitive data types can share one reference
                                  //unlike the primitive data types.

 
