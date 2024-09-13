const accountId=114450
let accountEmail="hitesh@google.com"
var accountPassword="1234"
accountCity="jaipur"
let accountState;

//this is posible to assign value without any assigning variable but it is not prefer to use
// accountId=2 constant is unchangable in entier code
accountEmail="hs@google.com"
accountPassword="3128"
accountCity="bengluru"
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
/* prefer not to use var
becoz of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

