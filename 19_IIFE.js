const user={
    name: "John Doe",
    age: 30,
    welcomegreeting: function() {
    console.log(`${this.name} , welcome to website`);
    // console.log(this);//this tells about current context
    }

}
// user.welcomegreeting()
// user.name = "Hitsh Soni";
// user.welcomegreeting();
// user.name="Tarachand soni"
// user.welcomegreeting()
console.log(this);//we are in node environment -> global content is empty that's why returns empty object

// function onechai(){
//     let username ="Hitesh"
//     console.log(this.username);//undefined
// }
// onechai() 

/*Arrow function */
// const chai = () =>{
//     let username ="Hitesh"
//         console.log(this.username);//undefined
// }
// chai()

// const addnum=(num1,num2)=>{
//     return num1 + num2;
// }
// const addnum = (num1,num2)=> num1+num2 //this will run
// const addnum =(num1,num2)=> (num1+num2)//this will run
// const addnum =(num1,num2)=> {num1,num2}//this will not run untill we use return
const addnum =(num1,num2)=> {username : "Hitesh"}//this will not run untill if we not use () because this is object
console.log(addnum(3,5));