// const TinderUser = new Object() -> singleton object 
const TinderUser = {} // this is non-singleton object
TinderUser.Id = "1234abc"
TinderUser.name= "Suresh"
TinderUser.isloggedIn= false

console.log(TinderUser);// this will return empty object {} for both case

const regularUser={
    email: "some@gmail.com",
    fullname: {
        username:{
            firstName: "Hitesh",
            lastName: "Soni"
        }

    }
}
// console.log(regularUser.fullname.username.firstName); -> how to acess the nested object

const obj1 ={1: 'A', 2: 'B', 3: 'C'} // object with numeric keys
const obj2 = {4: 'D' , 5: 'E'} // object with numeric keys
console.log(obj1[1]); // prints 'A'
const obj3 = {...obj1, ...obj2} // merging two objects with numeric keys
//const obj3 ={obj1 , obj2} merging two objects with numeric keys
//const obj3 = Object.assign({},obj1, obj2) // merging two objects with numeric keys //all keys will be merged in {}
console.log(obj3); // prints { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' }

const user= [
    {
        id: '1234Hitesh',
        name: 'Hitesh Soni'
    },
    {
        id: '1234Suresh',
        name: 'Suresh'
    },
    {
        id: '1234Rahul',
        name : 'Rahul'
    }
]

console.log(user[1].name); // prints 'Suresh'
console.log(user[0].id); // prints '1234Hitesh'

console.log(Object.keys(TinderUser));//[ 'Id', 'name', 'isloggedIn' ]-> Arrays data type
console.log(Object.values(TinderUser));//[ '1234abc', 'Suresh', false ] -> Arrays data type
console.log(Object.entries(TinderUser)); // [ [ 'Id', '1234abc' ],[ 'name', 'Suresh' ],[ 'isloggedIn', false ] ] -> Arrays data type
console.log(TinderUser.hasOwnProperty('isloggedIn'));//true
console.log(TinderUser.hasOwnProperty('isLogged'));//false
