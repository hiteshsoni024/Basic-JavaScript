//syntax of switch 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = "January"
switch (month) {
    case "January":
        console.log("this month is January");
        break;
    case "February":
        console.log("this month is February");
        break;
    case "March":
        console.log("this month is March");
        break;
    case "April":
        console.log("this month is April");
        break;
    case "May":
        console.log("this month is May");
        break;
    case "June":
        console.log("this month is June");
        break;
    case "July":
        console.log("this month is July");
        break;
    case "August":
        console.log("this month is August");
        break;
    case "September":
        console.log("this month is September");
        break;
    case "October":
        console.log("this month is October");
        break;
    case "November":
        console.log("this month is November");
        break;
    case "December":
        console.log("this month is December");
        break;

    default:
        console.log("You entred wrong mont or you done spell mistake!");
        
        break;
}

//truthy and falsy values 
// except 0,-0,BigInt,"",null,undefined,NaN all are truthy
//"0","false"," ",[] -> if(array.length==0),{} -> if(Object.keys(name of object).length === 0),function(){} are truthy