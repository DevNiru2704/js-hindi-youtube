const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//filter

// const newNums=myNums.filter((num)=>num>4)
// const newNums=myNums.filter((num)=>{return num>4}) //Have to give return after opening a scopr or curly braces otherwise we will only get an empty array.
// console.log(newNums)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// let userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);

// userBooks = books.filter((bk) => {
//   return bk.publish >= 1995 && bk.genre === "History";
// });

// console.log(userBooks);


//map

// let addNum=myNums.map((num)=>num+10)
// addNum=myNums.map((num)=>{return num+10})
// addNum=myNums.map((num)=>num*2).filter((num)=>num>=10 && num<=20) //Chaining method
// console.log(addNum)

//reduce

const total=myNums.reduce(function (accumulator,currentValue){
    console.log(`accumulator = ${accumulator}, Current value=${currentValue}`)
    return accumulator+currentValue
},0)

console.log(total)

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay)