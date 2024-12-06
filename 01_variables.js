const accountId=114450 
let accountEmail="hitesh@google.com"
var accountPassword="1234" //
accountCity="jaipur"
let accountState; 

/* prefer not to use var
becoz of issue in block scope and functional scope
*/

//this is posible to assign value without any assigning variable but it is not prefer to use

// accountId=2 constant is unchangable in entier code
//accountID is a constant so we can't change it
accountEmail="hs@google.com"
accountPassword="3128"
accountCity="bengluru"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);