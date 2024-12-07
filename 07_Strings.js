const name ="Hitesh "
const repoCount =2
// console.log("Hello i am "+name+repoCount+" I am learning Javascript");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another method to declair string
const gameName = new String("HiteshKumarSoni");
console.log(gameName);
console.log(gameName[3]);
console.log(gameName.__proto__); //returns {}
console.log(gameName.length); //returns length of String

console.log(gameName.toLocaleLowerCase());
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('S'));

const newstring=gameName.substring(0,3)
console.log(newstring);
const anotherString =gameName.slice(4,8);
console.log(anotherString);

const newString01="   Hitesh       ";
console.log(newString01.trim());
console.log(newString01.trimStart());
console.log(newString01.trimEnd());

const url = "https://www.google.com/hitesh%201Soni";
console.log(url.replace("%201","-"));  