// class User {
//     constructor(username){
//         this.username = username
//     }

//     logMe(){
//         console.log(`Username: ${this.username}`);
//     }

//     static createId(){ //This is a static method and can only be directly called by its class and not by its instances.
//         return `123`
//     }
// }

// console.log(User.createId()) //Static function called by its className
// const hitesh = new User("hitesh")
// console.log(hitesh.createId())

// class Teacher extends User {
//     constructor(username, email){
//         super(username)
//         this.email = email
//     }
// }

// const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());

//***********************************CONVERSION WITHOUT CLASS **********************************

function User(username){
    this.username=username
}

User.prototype.logMe=function(){
    console.log(`Username: ${this.username}`);
}

User.prototype.createId=function(){ //This is how we can simulate static functions. We directly attach to the constructor function
    return `123`
}


const hitesh = new User("hitesh")
console.log(hitesh.createId())

function Teacher(username,email){
    User.call(this,username)
    this.email=email
}

Object.setPrototypeOf(Teacher.prototype,User.prototype)

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId())