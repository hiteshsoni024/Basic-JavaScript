function sayMyName() {
    console.log("function sayMyName is called!")
}
// sayMyName() -> function sayMyName is called!

function addNum1(num1,num2) {
    return num1 + num2;
}
// console.log(addNum1(3,4)) -> 7
function addNum2(num1,num2) {
    console.log(num1 + num2);
}
// const sum = addNum2(3,5) // 8
// console.log("sum",sum) // undefined

// function login(username = "NewUser") 
//if we did not give any argument in login() to undefine ki jagh NewUser use hoga , or agr login() me kuch agument denge to wo overright ho jayega 
function login(username)
//if we did not give any argument in login() to undefine use hoga ,
{
    // if(username === undefined)
    if(!username) // both syntax are equivalent
    {
        console.log("username is undefined");
        return
    }
    return `${username} just logged in.`
}
// console.log(login("Hitesh"));//Hitesh just logged in.
//  console.log(login())//username is undefined