const name="Nirmalya"
const repoCount="17"
//console.log(name+repoCount+" Value"); //String concatenation
//console.log(name.concat(repoCount," Value")); //Another of String concatenation
//console.log(`My name is ${name} and my repo count is ${repoCount}`); //String interpolation using backticks

const gameName=new String("Temple Run"); //By using this method we can access several functions of strings like toUpperCase(),toLowerCase,etc. 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.charAt(2));
console.log(gameName.at(-5)); //Performs the same function as charAt. Only difference is we can put negative index in at() unlike charAt
console.log(gameName.indexOf('m'));
console.log("Temple".lastIndexOf('e')); //It returns the last possible value that a particular character can exist in the string.
console.log(gameName.substring(0,4));
console.log(gameName.slice(0,4));
console.log(gameName.slice(-8,4)); //positive value mean index is counted from left to right and negative value means index is counted from right to left.
console.log("     Nirmalya             ".trim().length); //Result will be 8 but in the given string there are more than 8 characters. This is because trim will remove all the starting and ending whitespaces " " and line-terminators "\n".
console.log(gameName.endsWith("Run"));

const url="www.example%20wiki.com";
console.log(url.replace("%20","-"));
console.log(url.includes("example"));
console.log(url.split('%20')); //We get a string array and its separator is %20.
console.log(url.localeCompare(gameName)); //returns 1 if string1 is higher in alphabetical order than   
                                          //string2
                                          //return 0 if string1 is identical to string2
                                          //return -1 if string1 is lower in alphabetical order than string2

const stringWithLoneSurrogates = '\uD800';


console.log(stringWithLoneSurrogates.isWellFormed()); 
console.log(stringWithLoneSurrogates.toWellFormed());

