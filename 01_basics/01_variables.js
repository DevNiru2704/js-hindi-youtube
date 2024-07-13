const accountId=2342423424;
let accountEmail="nirmal@gmail.com";
var accountPassword="12345";
accountCity="Jaipur"; //not a recommended way to initialize a variable but still possible
let accountState;
//accountId=2 not allowed because of const.
//console.log(accountId);
//console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/* Prefer not to use var because of issue in block scope and functional scope. */

//var is function() scoped and let is braces{} scoped. That mean we can use var anywhere inside a function and we can
//use let only inside a particular curly braces. That means declaring a variable using let has the same function as the
//variables in other programming languages like C, C++, etc. Also let is more secure compared to var because if we open
//the console inside a browser and type inside "window" without the quotes. We can see our variable along with its data
//inside the window. So using var someone with malicious intentions can easily see our data inside our website by this
//method.