const score =200; //automatically casted number
const balance = new Number(100);//typically casted number
console.log(balance);
console.log(score);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum=32.8966
console.log(otherNum.toPrecision(2));//round off the figure

const hundreds= 10000000;
console.log(hundreds.toLocaleString());//formatting the number to be read as a string(zeros are added to make it readable)
// +++++++++++MAths+++++++++++++++++
console.log(Math);
console.log(Math.abs(-6));// absolute value of a number
console.log(Math.round(42.6));// round off the given value 
console.log(Math.ceil(3.2));//round off by upper limit  
console.log(Math.floor(8.9));// round off by lower limit
console.log(Math.max(2,3,5,7,8));//finds maximum number
console.log(Math.min(3,46,2,5,1));//finds minimum number
console.log(Math.random()); //gives random values between 0 and 1
console.log((Math.random()*10)+1);//value doesnot goes o less then zero mininmum value is 1

const min =10;
const max =20;

console.log(Math.floor(Math.random()* (max-min+1))+min);//this gives me above min and below max value and automatically round of the value to lower limit

