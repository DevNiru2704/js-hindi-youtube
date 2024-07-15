const tinderUser=new Object(); //This is a Singleton.
// const tinderUser2={} //This is not a Singleton.

tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullName:{
        userFullName: {
            firstName:"Nirmalya",
            lastName:"Mandal"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

// console.log(Object.assign({},obj1,obj2)) //{} is optional but is recommended to give according to documentation.
// console.log({...obj1,...obj2}); //By spread operator

const users=[  //array of objects
    {
        id:1,
        email:"nirmalya@gmail.com"
    },
    {
        id:1,
        email:"nirmalya@gmail.com"
    },
    {
        id:1,
        email:"nirmalya@gmail.com"
    },
    {
        id:1,
        email:"nirmalya@gmail.com"
    },
]

// console.log(users[0].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course={
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor: instructor}=course; //Using this syntax repetition of using the . operator or [""] can be avoided. It is not necessary to give another for a key value. We can directly use "const {courseInstructor}=course;" without the quotes and then just courseInstructor to use it.
console.log(instructor);