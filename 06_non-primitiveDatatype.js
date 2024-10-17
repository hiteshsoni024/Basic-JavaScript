//non-primitive data types : Array , objects, Functions

const heros=["ironman","hulk","thor"];//array

let myObj ={
    name: "Hitesh",  //object
    age: 20
}

const myFunc= function(){
    console.log("Jai shree Ram");  //function
}

/*Stack and Heap memory in javascript */
//Stack memory : primitive data types , function call stack
//Heap memory : non-primitive data types , objects , arrays , functions

// stack memory
let myName="Hitesh Soni"
let anotherName = myName
anotherName = "Soni Hitesh"
 console.log(myName)
 console.log(anotherName)

//heap memory
let user={
    email: "username@gmail.com",
    name: "userName",
    upi: "user@ybl"
}
console.log(user.email);
console.log(user.upi);
