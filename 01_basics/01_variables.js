const accountId=2342423424;
let accountEmail="nirmal@gmail.com";
var accountPassword="12345";
accountCity="Jaipur"; //not a recommended way to initialize a variable but still possible
let accountState;
//accountId=2 not allowed because of const.
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


/* Prefer not to use var because of issue in block scope and functional scope. */