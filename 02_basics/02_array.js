const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","batman","flash"];

//console.log(marvel_heroes.push(dc_heroes)); //Pushes the whole array into another array creating a 2D array.
//console.log(marvel_heroes.concat(dc_heroes)); //Merges the elements of the array
// console.log([...marvel_heroes,...dc_heroes]); //Spread operator. Its more preferable because we can simultaneously merger than two arrays.

const newArray=[1,2,[5,6,2],4,5,6,[3,2,[3,3,4]]];
// console.log(newArray);
const flatArray=newArray.flat(Infinity); 
// console.log(flatArray);


// console.log(Array.isArray(newArray));
// console.log(Array.from("Nirmalya"));
// console.log(Array.from({
//     name:"Nirmalya",
//     age:19
// }));

let score1=200;
let score2=300;
let score3=400;

console.table((Array.of(score1,score2,score3,newArray.flat(Infinity))).flat(Infinity)) //of() function merges value into an array.