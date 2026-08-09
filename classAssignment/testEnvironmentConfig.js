const uRL = "https://qa.myshop.com";
const appName = "MY Ecommerce My Shop";
let environmentName = "QA";
let tester = "Aditya ";
let testDate = "12-03-2026" ;
let automationEnable = true ;

console.log("==========================");
console.log("Environment URL is :- ", uRL);
console.log("--------------------------------");
console.log("Application name is :- ", appName);
console.log("------------------------------------");
console.log("Test environment is :- ",environmentName, " And Tester is ",tester," Date is ",testDate);
console.log("-----------------------------------------------")
environmentName = "Staging"; 
tester = "Dhruvit"
testDate = "12-12-2026"
console.log("Test environment is :- ",environmentName, " And Tester is ",tester," Date is ",testDate);
console.log("-----------------------------------------------")
environmentName = "Regression";
tester = "Harsh"
testDate = "02-11-2026" 
console.log("Test environment is :- ",environmentName, " And Tester is ",tester," Date is ",testDate);
console.log("-----------------------------------------------")
console.log("Test Environment is Auto/Manual:- ",automationEnable);
console.log("--------------------------------");


// OutPut :- 
// ==========================
// Environment URL is :-  https://qa.myshop.com
// --------------------------------
// Application name is :-  MY Ecommerce My Shop
// ------------------------------------
// Test environment is :-  QA  And Tester is  Aditya   Date is  12-03-2026
// -----------------------------------------------
// Test environment is :-  Staging  And Tester is  Dhruvit  Date is  12-12-2026
// -----------------------------------------------
// Test environment is :-  Regression  And Tester is  Harsh  Date is  02-11-2026
// -----------------------------------------------
// Test Environment is Auto/Manual:-  true
// --------------------------------