const accountId=144553
let accountEmail="sneha678@gmail.com"
var accountPassword="23746"
accountCity="delhi"

//accountId=2//not allowed as accountId is const
accountEmail="heeloworld"
accountPassword="75637"
accountCity="sonipat"
let accountState;
/*
in javascript if variable is defined and no value is assigned then it will take it undefined
*/
console.log(accountId);
/*
prefer not to use var bcs of issue of block scope and functional scope
*/
console.table([accountId,accountPassword,accountCity,accountEmail,]);
