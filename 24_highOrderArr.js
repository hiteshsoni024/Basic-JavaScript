const myArray = [1,2,3,4,5,6,7,8,9]

// forEach loop
for (const arr of myArray) {
    console.log(arr)
}
const greeting = "Hello world!"
// forEach loop
for (const greet of greeting) {
    if(greet == " "){
        continue;// skip the space
    }
    console.log(greet)
}

// maps -> map is a object which holds Key-value pair
//it keep remembers the original insertion of the keys 
//map objects are collection of key-value pair may only occur once.it is unique in map selection
const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Pak',"Pakistan")
map.set('SL',"Shri Lanka")
map.set('SL',"Shri Lanka")//this value is not to be print because map contain unique values
//console.log(map);//it will prints object
for (const key of map) {
    console.log(key);//prints array
}
for (const [key,value] of map) {
    console.log(key,":-",value);//this will prints only the key and their coresponding value
}

const myObj ={
    'Game1': "Mario",
    'Game2': "COD",
    'Game3': "BGMI"
};
// for (const [key,value] of myObj) {
//     console.log(key,":-",value);
// } this will not work on object
//for objects we use for in
forin