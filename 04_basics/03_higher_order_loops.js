//for of

const arr=[1,2,3,4,5]

// for(const i of arr){
//     console.log(i)
// }

// const greetings="Hello World!"

// for(const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }

//Map

const map= new Map()

map.set("IN","INDIA")
map.set("USA","United States of America")
map.set("UK","United Kingdom")
map.set("IN","INDIA") //New key value will not be added because maps can only have unique key value pairs and they are arranged in the order of addition.

// console.log(map)

// for(const i of map){
//     console.log(i) //Each entries will become separate arrays
// }

// for(const [key,value] of map){// We are destructuring the array
//     console.log(key,":- ",value)
// } 

// const myObject={
//     "game1":"NFS",
//     "game2":"Spiderman"
// }

// for(const [key,value] of myObject){ //Will give error. Objects are not iterable in for of loop
//     console.log()
// }

// for(const key in map){ //Will print nothing because map is not iterable in for in
//     console.log(key)
// }

const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift"
}

// for(const key in myObject){ //For in is used to loop objects
//     console.log(key)
// }

// for(const key in myObject){
//     console.log(myObject[key])
// }

const programming=["js","C++","C","ruby"]

// for(const key in programming){ //For in loop works for arrays but iterator returns the index value of the  array. In the for of loop we saw that we directly get the value of array.
//     console.log(`${key} => ${programming[key]}`)           
// } 

//for each
// programming.forEach(function(val){
//     console.log(val)
// })

// programming.forEach((val) => { //Arrow funcition
//     console.log(val)
// })

//Another Way
// function printMe(item){
//     console.log(item)
// }

// programming.forEach(printMe)

// programming.forEach((val, index, array) => { //Arrow function
//     console.log(`Value: ${val}, Index: ${index}, Array: ${array}`)
//     console.log(array)
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"C",
        languageFileName:"c"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})