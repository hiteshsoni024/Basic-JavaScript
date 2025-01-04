//if
const isUserLoggedIn = true;
//comparator -> <(less then),<(greater than),=>(greater than equal to),=<(less than equal to),==(comparing if the value is equal or not , does not check data type),!=(not equal to),===(strictly equal to),!==(strictly not equal to)

if(isUserLoggedIn){
    console.log("Executed")
}

const score = 200;
if (score >100){
    power="fly"
}else{
    power="swim"
}
console.log(`User can ${power}`)