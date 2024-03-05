const accountId = 34233
let accountEmail = "Abhi@gmail.com"
var accountPassword = "54321"
accountCity = "Hospet"
// accountState;

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "3233"
accountCity  = "bangalore"


console.log(accountId);

/*
    Prefer not to use var 
    because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity])