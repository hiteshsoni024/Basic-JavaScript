//object constructor
//object.create-> singleton


//object literals
const mySym1 = Symbol('mySym1');
const mySym2 = Symbol("mySym2");

const JsUser ={
    name : "Hitesh",//you can access it by using dot notation
    "full name": "Hitesh Soni",//you can't access it by using dot notation
    mySym1 : "myKey1", 
    [mySym2]:"mykey2",
    age: 19,
    location: "India",
    email: "hitesh@gmail.com",
    isloggedIn: false,//keys are used as a string
    lastLoggedIn: ["Monday","Wednesday"]
}
console.log(JsUser.email)
console.log(JsUser["isloggedIn"]);
console.log(JsUser["email"]);
console.log(JsUser["full name"]); 
console.log(JsUser.mySym1);//but the key is a string not a symbol //this will print myKey1
console.log(JsUser[mySym2]);//this will return mykey2 //the type of key is symbol

JsUser.email ="hitesh@google.com"
// Object.freeze(JsUser)//this will prevent any modification to the object
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello User");
}
JsUser.greeting2= function(){
    console.log(`Hello ${this.name} , Your age is ${this.age} and your email address is ${this.email}`);
}
console.log(JsUser.greeting());//
console.log(JsUser.greeting2());

