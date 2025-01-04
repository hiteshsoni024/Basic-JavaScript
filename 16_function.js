function calculateCardPrice(num1,num2,...num3) {
    console.log(num1)//291
   
    console.log(num2)// 213
   
    console.log(num3)// [ 435, 64, 654, 43, 23 ]-> returns array
}
calculateCardPrice(291,213,435,64,654,43,23);

const user = {
    username : "john",
    age : 30,
    post: "lead"
}
// function employee(){
//     console.log(`The username is : ${user.username} and age is : ${user.age} and post is : ${user.username}`);
// }
// employee() ->The username is : john and age is : 30 and post is : john

function employee(anyObject){
    console.log(`The username is : ${anyObject.username} and age is : ${anyObject.age} and post is : ${anyObject.username}`);
}
employee(user)

const newArray1 = [100,200,300,400,600]

function returnValue1(getValue1) {
    console.log(getValue1[0]);
    console.log(getValue1[1]);
    console.log(getValue1[2]);
    console.log(getValue1[3]);
    console.log(getValue1[4]);
}
returnValue1(newArray1);


function returnValue2(getValue2) {
    console.log(getValue2[0]);
    console.log(getValue2[1]);
    console.log(getValue2[2]);
    console.log(getValue2[3]);
    console.log(getValue2[4]);
}
returnValue2(([23,24,35,56,65]));
