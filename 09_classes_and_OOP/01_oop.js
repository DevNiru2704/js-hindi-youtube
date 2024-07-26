function User(username,age,isLoggedIn){
    this.username=username
    this.age=age
    this.isLoggedIn=isLoggedIn
}

const userOne = new User("Nirmalya Mandal",19,true)
const userTwo = new User("Sayantan Sarkar",60,false) //if we don't give the new keyword, userTwo will overwrite userOne.
const userThree=new Promise(function(resolve,reject){})
console.log(userOne instanceof User) //true
console.log(userTwo instanceof User) //true
console.log(userTwo instanceof Object) //true
console.log(userThree instanceof User) //false
console.log(userThree instanceof Promise) //true
console.log(userThree instanceof Object) //true
