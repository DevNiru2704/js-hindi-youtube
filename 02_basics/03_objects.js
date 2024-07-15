//note to self:  There are two ways to define an object: Constructor and Object Literals. When we define a constructor, a Singleton object is created. It means that it is an unique object and it does not have any instances and when we define an object literal, there are many instances of that object being created.

//object literals
const mySym=Symbol("key")
const jsUser={
    name:"Nirmalya", //key value pairs
    "full name": "Nirmalya Mandal",  //can't access using the . operator. Use jsUser.["full name"]\
    [mySym]:"key2", //Synatax of symbol
    age:"19",
    location:"Kolkata",
    email:"nirmalya@mail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//ways to access key value pairs of an object

// console.log(jsUser["email"]);
// console.log(jsUser.email);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser);
// Object.freeze(jsUser); // No one can change the key value pairs

jsUser.greetings=function(){
    console.log("Hello JS user!");
}
jsUser.greetingsTwo=function(){
    console.log(`Hello js User, ${this.name}!!`); //this keyword. all the keyvalue pairs will be from the object that  greetingsTwo belong to.
}
// console.log(jsUser.greetings());
// console.log(jsUser.greetings);
// console.log(jsUser.greetingsTwo); //undefined also occurs along with the printing the print statement
// console.log(jsUser.greetingsTwo());

jsUser.greetings();
jsUser.greetingsTwo(); //undefined will no longer occur. Just call the function.
