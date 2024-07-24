// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

// A promise is said to be settled if it is either fulfilled or rejected, but not pending.

// const promiseOne=new Promise(function(resolve,reject){
//     //Do aync tasks
//     //DB call, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is complete")
//         resolve()
//     },1000)
    
// })

// promiseOne.then(function(){//The callback to excecute when the promise is resolved.
//     console.log("Promise consumed")
// }) 

// new Promise(function(resolve,reject){ //Another syntax of promiss
//     setTimeout(function(){
//         console.log("Async Task is Completed.")
//         resolve()
//     },1000)
    
// }).then(function(){
//     console.log("Promise resolved")
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"Nirmalya",age:"19"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     let error=false;
//     if(!error)
//         resolve({name:"Nirmalya", age:"19"})
//     else
//         reject("Error 404: Something went wrong!")
// })


// promiseFour.then((user)=>{
//     console.log(user)
//     return user["name"]
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(function(){
//     console.log("The promise has either been resolved or rejected.")
// })

// const promiseFive=new Promise(function(resolve,reject){
//     let error=true;
//     if(!error)
//         resolve({name:"Nirmalya", age:"19"})
//     else
//         reject("Error 404: Something went wrong!")
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
//     return;
// }

// consumePromiseFive()

async function getAllUsers(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data1=await response.json()
        // const data2=await JSON.parse(response) //This command will not work and will give error because the response is not in the JSON string format. Its in the response object format. You can see what response contains in the console.log. This command only works for valid JSON strings.
        console.log(response)
        console.log(data1)
        // console.log(data2)
    }catch(error){
        console.log("Error: ",error)
    }finally{
        console.log("Async task successfully rejected or resolved.")
    }
}

getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{ //Another way using .then.catch
    return response.json()
}).then((responseJSON)=>{
    console.log(responseJSON)
}).catch((error)=>{
    console.log("Error: ",error)
}).finally(()=>{
    console.log("Async task successfully rejected or resolved.")
})

//Here we get to observe a thing. Here the previous promise ran first and then this one. 