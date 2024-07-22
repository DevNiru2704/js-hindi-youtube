const marvel_heroes=["thor","ironman","spiderman"];
const dc_heroes=["superman","batman","flash"];

//console.log(marvel_heroes.push(dc_heroes)); //Pushes the whole array into another array creating a 2D array.
//console.log(marvel_heroes.concat(dc_heroes)); //Merges the elements of the array
// console.log([...marvel_heroes,...dc_heroes]); //Spread operator. Its more preferable because we can simultaneously merge more than two arrays.

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


/************************************************* DESTRUCTURING OBJECTS ************************************************/

let num=[1,2,3,4,5,6,7,8,9,10]

// const [a,b,c,d,e,f,g,h,i,j]=num //Basic way to destructure an array

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)
// console.log(j)

// const numbers = [1, 2, 3]; //Skipping values
// const [a, , c] = numbers;
// console.log(a); // 1
// console.log(c); // 3

// const numbers = [1, 2]; //Default Values Destucturing
// const [a, b, c = 3] = numbers; 
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// const numbers = [1, 2, 3, 4]; 
// const [a, b, ...rest] = numbers; //Destructuring using rest operator
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4]

// const numbers = [1, [2, 3], 4];
// const [a, [b, c], d] = numbers; //Destructuring nested arrays
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4
