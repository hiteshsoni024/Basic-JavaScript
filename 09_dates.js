let myDate= new Date();
console.log(myDate);//2024-12-07T08:23:20.187Z
console.log(myDate.toString());//Sat Dec 07 2024 13:54:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Sat Dec 07 2024
console.log(myDate.toISOString());//2024-12-07T08:30:55.757Z
console.log(myDate.toJSON());//2024-12-07T08:30:55.757Z
console.log(myDate.toLocaleDateString());//7/12/2024
//date is object

let NewDate = new Date(2025,0,21);
console.log(NewDate.toDateString());

let TimeStamp = Date.now();
console.log(TimeStamp);//gives time stamp in milliseconds
console.log(NewDate.getTime());
console.log(Date.now());


console.log (NewDate.toLocaleDateString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
 }))